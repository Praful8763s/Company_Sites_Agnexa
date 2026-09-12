import { getInitialData } from './seedData.js';
import { supabase, isSupabaseConfigured } from './supabase.js';
import { pgPool, isPostgresConfigured, connectPostgres } from './postgres.js';

class SupabaseCollection {
  constructor(tableName, initialData = []) {
    this.tableName = tableName;
    this.memory = [...initialData];
  }

  // Escape column name for Postgres (handle camelCase like "fullName", "techStack", etc.)
  col(name) {
    if (/[A-Z]/.test(name)) return `"${name}"`;
    return name;
  }

  // Format document so both _id and id are accessible and dates harmonized
  formatDoc(doc) {
    if (!doc) return null;
    const formatted = { ...doc };
    if (formatted.id && !formatted._id) formatted._id = formatted.id;
    if (formatted._id && !formatted.id) formatted.id = formatted._id;
    if (formatted.created_at && !formatted.createdAt) formatted.createdAt = formatted.created_at;
    if (formatted.updated_at && !formatted.updatedAt) formatted.updatedAt = formatted.updated_at;
    if (!formatted.industry && formatted.category) formatted.industry = formatted.category;
    if (!formatted.category && formatted.industry) formatted.category = formatted.industry;
    if (!formatted.clientName && formatted.client) formatted.clientName = formatted.client;
    if (!formatted.client && formatted.clientName) formatted.client = formatted.clientName;
    if (!formatted.image && formatted.imageCover) formatted.image = formatted.imageCover;
    if (!formatted.imageCover && formatted.image) formatted.imageCover = formatted.image;
    if (!formatted.date && formatted.createdAt) {
      try {
        formatted.date = new Date(formatted.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      } catch {
        formatted.date = 'Recently';
      }
    }
    return formatted;
  }

  async find(filter = {}) {
    // 1. Direct Native PostgreSQL
    if (isPostgresConfigured && pgPool) {
      try {
        const whereClauses = [];
        const params = [];
        let pIdx = 1;
        for (const [key, value] of Object.entries(filter)) {
          if (value !== undefined && typeof value !== 'object') {
            whereClauses.push(`${this.col(key)} = $${pIdx++}`);
            params.push(value);
          }
        }
        const whereStr = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
        const sql = `SELECT * FROM public.${this.tableName} ${whereStr} ORDER BY created_at DESC`;
        const res = await pgPool.query(sql, params);
        const results = res.rows.map(r => this.formatDoc(r));
        return {
          sort: (sortObj = {}) => {
            const [sortKey, sortOrder] = Object.entries(sortObj)[0] || ['createdAt', -1];
            return [...results].sort((a, b) => {
              const valA = a[sortKey] || '';
              const valB = b[sortKey] || '';
              if (sortOrder === -1 || sortOrder === 'desc') return valA < valB ? 1 : valA > valB ? -1 : 0;
              return valA > valB ? 1 : valA < valB ? -1 : 0;
            });
          },
          then: (resolve) => resolve(results)
        };
      } catch (err) {
        console.warn(`[PostgreSQL Notice] Falling back for ${this.tableName}:`, err.message);
      }
    }

    // 2. Supabase REST SDK
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from(this.tableName).select('*');
        for (const [key, value] of Object.entries(filter)) {
          if (value !== undefined && typeof value !== 'object') {
            query = query.eq(key, value);
          }
        }
        const { data, error } = await query;
        if (!error && data) {
          const results = data.map(r => this.formatDoc(r));
          return {
            sort: (sortObj = {}) => {
              const [sortKey, sortOrder] = Object.entries(sortObj)[0] || ['created_at', -1];
              return [...results].sort((a, b) => {
                const valA = a[sortKey] || '';
                const valB = b[sortKey] || '';
                if (sortOrder === -1 || sortOrder === 'desc') {
                  return valA < valB ? 1 : valA > valB ? -1 : 0;
                }
                return valA > valB ? 1 : valA < valB ? -1 : 0;
              });
            },
            then: (resolve) => resolve(results)
          };
        }
      } catch (err) {
        console.warn(`[Supabase Notice] Falling back to local cache for ${this.tableName}:`, err.message);
      }
    }

    // 3. Memory Store Fallback
    let results = this.memory.filter(item => {
      for (const [key, value] of Object.entries(filter)) {
        if (item[key] !== value) return false;
      }
      return true;
    }).map(r => this.formatDoc(r));

    return {
      sort: (sortObj = {}) => {
        const [sortKey, sortOrder] = Object.entries(sortObj)[0] || ['createdAt', -1];
        return [...results].sort((a, b) => {
          const valA = a[sortKey] || '';
          const valB = b[sortKey] || '';
          if (sortOrder === -1 || sortOrder === 'desc') {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
          }
          return valA > valB ? 1 : valA < valB ? -1 : 0;
        });
      },
      then: (resolve) => resolve(results)
    };
  }

  async findById(id) {
    if (isPostgresConfigured && pgPool) {
      try {
        const sql = `SELECT * FROM public.${this.tableName} WHERE id::text = $1 LIMIT 1`;
        const res = await pgPool.query(sql, [String(id)]);
        if (res.rows.length > 0) return this.formatDoc(res.rows[0]);
      } catch (err) {
        // Fallback
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from(this.tableName)
          .select('*')
          .or(`id.eq.${id}`)
          .maybeSingle();
        if (!error && data) return this.formatDoc(data);
      } catch (err) {
        // Fallback to memory
      }
    }
    const found = this.memory.find(item => item._id === id || item.id === id);
    return this.formatDoc(found);
  }

  async findOne(filter = {}) {
    if (isPostgresConfigured && pgPool) {
      try {
        const whereClauses = [];
        const params = [];
        let pIdx = 1;
        for (const [key, value] of Object.entries(filter)) {
          if (typeof value !== 'object' && value !== undefined) {
            whereClauses.push(`${this.col(key)} = $${pIdx++}`);
            params.push(value);
          }
        }
        const whereStr = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
        const sql = `SELECT * FROM public.${this.tableName} ${whereStr} LIMIT 1`;
        const res = await pgPool.query(sql, params);
        if (res.rows.length > 0) return this.formatDoc(res.rows[0]);
      } catch (err) {
        // Fallback
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from(this.tableName).select('*');
        for (const [key, value] of Object.entries(filter)) {
          if (typeof value !== 'object' && value !== undefined) {
            query = query.eq(key, value);
          }
        }
        const { data, error } = await query.limit(1).maybeSingle();
        if (!error && data) return this.formatDoc(data);
      } catch (err) {
        // Fallback to memory
      }
    }

    const found = this.memory.find(item => {
      for (const [key, value] of Object.entries(filter)) {
        if (typeof value === 'object' && value !== null) {
          if (value instanceof RegExp && !value.test(item[key])) return false;
        } else if (item[key] !== value) {
          return false;
        }
      }
      return true;
    });
    return this.formatDoc(found);
  }

  async create(doc) {
    const localId = 'doc_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    const newDoc = {
      _id: localId,
      id: localId,
      ...doc,
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (isPostgresConfigured && pgPool) {
      try {
        const keys = Object.keys(doc).filter(k => k !== '_id' && k !== 'id');
        const cols = keys.map(k => this.col(k));
        const placeholders = keys.map((_, idx) => `$${idx + 1}`);
        const values = keys.map(k => {
          const v = doc[k];
          if (Array.isArray(v) || (typeof v === 'object' && v !== null)) {
            return JSON.stringify(v);
          }
          return v;
        });

        const sql = `INSERT INTO public.${this.tableName} (${cols.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING *`;
        const res = await pgPool.query(sql, values);
        if (res.rows.length > 0) {
          const formatted = this.formatDoc(res.rows[0]);
          this.memory.unshift(formatted);
          return formatted;
        }
      } catch (err) {
        console.warn(`[PostgreSQL Insert Notice] Using local memory store:`, err.message);
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from(this.tableName)
          .insert([doc])
          .select()
          .maybeSingle();
        if (!error && data) {
          const formatted = this.formatDoc(data);
          this.memory.unshift(formatted);
          return formatted;
        }
      } catch (err) {
        console.warn(`[Supabase Insert Notice] Using local memory store:`, err.message);
      }
    }

    this.memory.unshift(newDoc);
    return newDoc;
  }

  async findByIdAndUpdate(id, updateData, options = { new: true }) {
    if (isPostgresConfigured && pgPool) {
      try {
        const keys = Object.keys(updateData).filter(k => k !== 'id' && k !== '_id');
        const setClauses = keys.map((k, idx) => `${this.col(k)} = $${idx + 1}`);
        setClauses.push('updated_at = NOW()');
        const values = keys.map(k => {
          const v = updateData[k];
          if (Array.isArray(v) || (typeof v === 'object' && v !== null)) {
            return JSON.stringify(v);
          }
          return v;
        });
        values.push(String(id));

        const sql = `UPDATE public.${this.tableName} SET ${setClauses.join(', ')} WHERE id::text = $${values.length} RETURNING *`;
        const res = await pgPool.query(sql, values);
        if (res.rows.length > 0) {
          const formatted = this.formatDoc(res.rows[0]);
          const idx = this.memory.findIndex(i => i._id === id || i.id === id);
          if (idx !== -1) this.memory[idx] = formatted;
          return formatted;
        }
      } catch (err) {
        // Fallback
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from(this.tableName)
          .update(updateData)
          .or(`id.eq.${id}`)
          .select()
          .maybeSingle();
        if (!error && data) {
          const formatted = this.formatDoc(data);
          const idx = this.memory.findIndex(i => i._id === id || i.id === id);
          if (idx !== -1) this.memory[idx] = formatted;
          return formatted;
        }
      } catch (err) {
        // Fallback to memory
      }
    }

    const index = this.memory.findIndex(item => item._id === id || item.id === id);
    if (index === -1) return null;
    const current = this.memory[index];
    const updated = {
      ...current,
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    this.memory[index] = updated;
    return this.formatDoc(updated);
  }

  async findByIdAndDelete(id) {
    if (isPostgresConfigured && pgPool) {
      try {
        const sql = `DELETE FROM public.${this.tableName} WHERE id::text = $1 RETURNING *`;
        await pgPool.query(sql, [String(id)]);
      } catch (err) {
        // Fallback
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase
          .from(this.tableName)
          .delete()
          .or(`id.eq.${id}`);
      } catch (err) {
        // Continue to memory delete
      }
    }

    const index = this.memory.findIndex(item => item._id === id || item.id === id);
    if (index === -1) return null;
    const deleted = this.memory.splice(index, 1)[0];
    return this.formatDoc(deleted);
  }

  async countDocuments(filter = {}) {
    if (isPostgresConfigured && pgPool) {
      try {
        const whereClauses = [];
        const params = [];
        let pIdx = 1;
        for (const [key, value] of Object.entries(filter)) {
          if (value !== undefined && typeof value !== 'object') {
            whereClauses.push(`${this.col(key)} = $${pIdx++}`);
            params.push(value);
          }
        }
        const whereStr = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
        const sql = `SELECT COUNT(*) AS total FROM public.${this.tableName} ${whereStr}`;
        const res = await pgPool.query(sql, params);
        if (res.rows.length > 0) return parseInt(res.rows[0].total, 10);
      } catch (err) {
        // Fallback
      }
    }

    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from(this.tableName).select('*', { count: 'exact', head: true });
        for (const [key, value] of Object.entries(filter)) {
          if (value !== undefined && typeof value !== 'object') {
            query = query.eq(key, value);
          }
        }
        const { count, error } = await query;
        if (!error && count !== null) return count;
      } catch (err) {
        // Fallback to memory count
      }
    }

    if (!filter || Object.keys(filter).length === 0) return this.memory.length;
    return this.memory.filter(item => {
      for (const [key, value] of Object.entries(filter)) {
        if (item[key] !== value) return false;
      }
      return true;
    }).length;
  }
}

// Global active store instance initialized with seed data and Supabase table bindings
const initial = getInitialData();
export const dbStore = {
  users: new SupabaseCollection('users', initial.users),
  services: new SupabaseCollection('services', initial.services),
  portfolio: new SupabaseCollection('portfolio', initial.portfolio),
  blogs: new SupabaseCollection('blogs', initial.blogs),
  contacts: new SupabaseCollection('contacts', initial.contacts),
  newsletters: new SupabaseCollection('newsletters', initial.newsletters),
  applications: new SupabaseCollection('applications', initial.applications)
};

export const connectDB = async () => {
  if (isPostgresConfigured) {
    const connected = await connectPostgres();
    if (connected) {
      console.log('⚡ [Agnexa Backend] Direct PostgreSQL (Supabase) database provider connected.');
      return;
    }
  }

  if (isSupabaseConfigured) {
    console.log('⚡ [Agnexa Backend] Supabase REST database provider connected.');
    return;
  }

  console.log('ℹ️ [Agnexa Backend] No Supabase credentials configured. Running with high-speed in-memory store.');
};


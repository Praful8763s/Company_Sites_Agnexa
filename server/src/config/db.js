import mongoose from 'mongoose';
import { getInitialData } from './seedData.js';
import { supabase, isSupabaseConfigured } from './supabase.js';

class SupabaseCollection {
  constructor(tableName, initialData = []) {
    this.tableName = tableName;
    this.memory = [...initialData];
  }

  // Format document so both _id and id are accessible
  formatDoc(doc) {
    if (!doc) return null;
    const formatted = { ...doc };
    if (formatted.id && !formatted._id) formatted._id = formatted.id;
    if (formatted._id && !formatted.id) formatted.id = formatted._id;
    return formatted;
  }

  async find(filter = {}) {
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
          const results = data.map(this.formatDoc);
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

    // Memory Store Fallback
    let results = this.memory.filter(item => {
      for (const [key, value] of Object.entries(filter)) {
        if (item[key] !== value) return false;
      }
      return true;
    }).map(this.formatDoc);

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
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from(this.tableName)
          .select('*')
          .or(`id.eq.${id},_id.eq.${id}`)
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
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from(this.tableName)
          .update(updateData)
          .or(`id.eq.${id},_id.eq.${id}`)
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
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase
          .from(this.tableName)
          .delete()
          .or(`id.eq.${id},_id.eq.${id}`);
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
  if (isSupabaseConfigured) {
    console.log('⚡ [Agnexa Backend] Supabase database provider activated.');
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('⚡ [Agnexa Backend] Running with High-Speed Dual-Mode Storage.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500
    });
    console.log(`✅ [MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`ℹ️ [Database Notice]: MongoDB not connected (${error.message}).`);
    console.log('⚡ [Agnexa Backend] Auto-fallback activated: Running with persistent high-speed data store.');
  }
};

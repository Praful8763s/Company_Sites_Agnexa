import pg from 'pg';
const { Pool } = pg;

// Read PostgreSQL connection parameters
const connectionString = (process.env.DATABASE_URL || process.env.POSTGRES_URL || '').trim();
const isConfigured = Boolean(
  connectionString && 
  !connectionString.includes('your-password') &&
  !connectionString.includes('placeholder')
);

let pool = null;

if (isConfigured) {
  const isLocal = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');
  pool = new Pool({
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

  pool.on('error', (err) => {
    console.warn('⚠️ [PostgreSQL Pool Warning]: Unexpected client error', err.message);
  });
}

export const query = async (text, params = []) => {
  if (!pool) throw new Error('PostgreSQL pool is not configured');
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  if (process.env.NODE_ENV === 'development') {
    console.log('⚡ [Postgres Query]', { text: text.substring(0, 100), duration: `${duration}ms`, rows: res.rowCount });
  }
  return res;
};

export const isPostgresConfigured = isConfigured;
export const pgPool = pool;

export const connectPostgres = async () => {
  if (!isConfigured || !pool) return false;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() AS current_time, current_database() AS db_name');
    client.release();
    console.log(`✅ [PostgreSQL Connected]: Database "${result.rows[0].db_name}" at ${result.rows[0].current_time}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ [PostgreSQL Connection Warning]: Failed to connect (${error.message}). Falling back.`);
    return false;
  }
};

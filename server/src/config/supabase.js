import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })
  : null;

if (isSupabaseConfigured) {
  console.log(`⚡ [Supabase] Connected to Supabase Project: ${supabaseUrl}`);
} else {
  console.log('ℹ️ [Supabase] No valid SUPABASE_URL & SUPABASE_ANON_KEY found in .env. Running on local high-speed in-memory store.');
}

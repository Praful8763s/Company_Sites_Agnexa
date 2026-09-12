import { createClient } from '@supabase/supabase-js';

// Clean and sanitize URL
let rawUrl = (process.env.SUPABASE_URL || '').trim();
if (rawUrl && !/^https?:\/\//i.test(rawUrl)) {
  // If user entered e.g. "xyz.supabase.co", auto-prepend https://
  rawUrl = `https://${rawUrl}`;
}
// Automatically strip /rest/v1 or trailing slash if user pasted full REST endpoint
rawUrl = rawUrl.replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');

const rawKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

const isValidHttpUrl = (urlString) => {
  if (!urlString || urlString.includes('your-project-id') || urlString.includes('placeholder')) {
    return false;
  }
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

const isValidKey = (keyString) => {
  if (!keyString || keyString.includes('your-anon-key') || keyString.includes('placeholder') || keyString.length < 10) {
    return false;
  }
  return true;
};

let client = null;
let configured = false;

if (isValidHttpUrl(rawUrl) && isValidKey(rawKey)) {
  try {
    client = createClient(rawUrl, rawKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    configured = true;
    console.log(`⚡ [Supabase] Connected to Supabase Project: ${rawUrl}`);
  } catch (error) {
    console.warn(`⚠️ [Supabase Warning] Failed to initialize client (${error.message}). Falling back to local data store.`);
    client = null;
    configured = false;
  }
} else {
  console.log('ℹ️ [Supabase] No valid SUPABASE_URL & SUPABASE_ANON_KEY configured. Running on high-speed in-memory store.');
}

export const isSupabaseConfigured = configured;
export const supabase = client;


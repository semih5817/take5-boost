import { createClient } from '@supabase/supabase-js';

const EXTERNAL_SUPABASE_URL = 'https://dflswqxftdxahuwkbgdy.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY = 'sb_publishable_ltaNA7nnVozoSCOcZIjg';

// Client for external Supabase project (apporteurs, users, commissions tables)
export const externalSupabase = createClient(EXTERNAL_SUPABASE_URL, EXTERNAL_SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

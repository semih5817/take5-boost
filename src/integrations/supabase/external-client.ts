import { createClient } from '@supabase/supabase-js';

const EXTERNAL_SUPABASE_URL = 'https://dflswqxftdxahuwkbgdy.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbHN3cXhmdGR4YWh1d2tiZ2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NDI0NzIsImV4cCI6MjA1NjUxODQ3Mn0.rQWiKDgHBGOjRq1qMuLFtBJqSzI8YZ7JnVObidR59eE';

// Client for external Supabase project (apporteurs, users, commissions tables)
export const externalSupabase = createClient(EXTERNAL_SUPABASE_URL, EXTERNAL_SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

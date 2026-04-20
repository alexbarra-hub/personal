import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://svnkjucrjpnjdezbodtc.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bmtqdWNyanBuamRlemJvZHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDIyMjQsImV4cCI6MjA3OTc3ODIyNH0.nWQTeRlOER_xJEoAE2TxA0mJkMcLKAIyFxkj9xJJ1xE';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

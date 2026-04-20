import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://svnkjucrjpnjdezbodtc.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bmtqdWNyanBuamRlemJvZHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDIwMjIyNCwiZXhwIjoyMDc5Nzc4MjI0fQ.wr8v6m3JT6YN5Vj0v9MzjNZAEMBBQXkp7aFLgHqGgxI';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://svnkjucrjpnjdezbodtc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bmtqdWNyanBuamRlemJvZHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDIyMjQsImV4cCI6MjA3OTc3ODIyNH0.nWQTeRlOER_xJEoAE2TxA0mJkMcLKAIyFxkj9xJJ1xE
Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

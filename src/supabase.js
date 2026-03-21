import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qlaezsnuyofisgboncnd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYWV6c251eW9maXNnYm9uY25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODUzMTUsImV4cCI6MjA4NTM2MTMxNX0.jTn86m1fQb9Hy6TmAToSXyOOZSJMdTjWoW384ASS7B8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

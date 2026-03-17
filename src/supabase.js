import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qlaezsnuyofisgboncnd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYWV6c251eW9maXNnYm9uY25kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTc4NTMxNSwiZXhwIjoyMDg1MzYxMzE1fQ.Q8oE2zoLOlynHZaa5hSLHZP5xIJnTxANu0zvn4kwU-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

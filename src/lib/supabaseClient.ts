import { createClient } from "@supabase/supabase-js";

const suapabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export { suapabase };

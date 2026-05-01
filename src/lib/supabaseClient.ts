import { createClient } from "@supabase/supabase-js";

const isDev = process.env.NODE_ENV === "development";

const suapabase = createClient(
  isDev ? process.env.NEXT_PUBLIC_SUPABASE_URL! : process.env.SUPABASE_URL!,
  isDev ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! : process.env.SUPABASE_ANON_KEY!
);

export { suapabase };

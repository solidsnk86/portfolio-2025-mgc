import { suapabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await suapabase.from("solidsnk_visitors")
    .select("*").order("created_at", { ascending: false })

    if (error) throw new Error(error.message)
    
    return Response.json({ allViews: data }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

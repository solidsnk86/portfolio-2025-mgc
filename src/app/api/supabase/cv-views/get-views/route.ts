import { suapabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await suapabase.from("cv_views").select("id");
    if (error) throw new Error(error.message);
    return Response.json({ count: data.length });
  } catch (error) {
    return Response.json({
      message: "Error en el servidor.",
      error,
    });
  }
}

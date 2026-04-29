import { suapabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { visitId: visit_id, from } = await req.json();
  try {
    const { error } = await suapabase.from("cv_views").insert({ visit_id, from })
    if (error) throw new Error(error.message);
  } catch (error) {
    return Response.json({ message: "Error en el servidor.", error });
  }
}
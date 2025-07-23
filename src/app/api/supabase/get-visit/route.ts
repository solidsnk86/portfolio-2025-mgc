import { suapabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await suapabase
      .from("solidsnk_visitors")
      .select("*")
      .order("visits_count", { ascending: false })
      .limit(1)

    if (error) throw new Error(error.message)

    return Response.json(data[0]);
  } catch (error) {
    return Response.json(
      {
        message: "Error al obtener los datos: " + (error as TypeError).message,
        success: false,
      },
      { status: 500 }
    );
  }
}

import { suapabase } from "@/lib/supabaseClient";

const isTheSameVisitor = async (visitId: string) => {
  try {
    const { data, error } = await suapabase
      .from("cv_views")
      .select("visit_id")
      .eq("visit_id", visitId)
      .single();
    if (error && error.code === "PGRST116") {
      throw error;
    }

    return !!data;
  } catch (error) {
    console.error("Error al checar id", error);
    return false;
  }
};

export async function POST(req: Request) {
  const { visitId, from } = await req.json();
  try {
    const isRepeatedID = await isTheSameVisitor(visitId);

    if (!isRepeatedID) {
      const { error } = await suapabase
        .from("cv_views")
        .insert({ visit_id: visitId, from });

      if (error) throw new Error(error.message);
    }
    
    return Response.json({}, { status: 200 });
  } catch (error) {
    return Response.json({
      message: "Error en el servidor.",
      error,
    });
  }
}

import { suapabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { ip, city, country } = await req.json();

  if (!ip || !city || !country) {
    return Response.json(
      { message: "El cuerpo es necesario" },
      { status: 400 }
    );
  }

  try {
    const { error } = await suapabase.from("solidsnk_visitors").insert([
      {
        ip,
        city_name: city,
        country_name: country,
      },
    ]);
    if (error) throw new Error(error.message);
    return Response.json(
      { message: "Datos envidos correctamente", success: true },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error en el servidor: " + (error as TypeError).message,
        success: false
      },
      { status: 500 }
    );
  }
}

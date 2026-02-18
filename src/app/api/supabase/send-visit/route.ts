import { suapabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { ip, city, country, page, so, browser, version, emoji_flag, lat, lon } = await req.json();

  if (!ip || !city || !country || !page || !so || !browser || !version || !emoji_flag) {
    return Response.json(
      { message: "Faltan parámetros en la solicitud" },
      { status: 400 }
    );
  }

  try {
    const { error } = await suapabase.from("solidsnk_visitors").insert([
      {
        ip,
        city_name: city,
        country_name: country,
        page,
        so,
        browser,
        version,
        emoji_flag,
        lat: parseFloat(lat),
        lon: parseFloat(lon)
      },
    ]);
    if (error) throw new Error(error.message);
    return Response.json(
      { message: "Datos enviados correctamente", success: true },
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

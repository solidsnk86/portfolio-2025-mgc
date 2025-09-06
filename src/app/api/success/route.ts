import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id_payment =
    req.nextUrl.searchParams.get("payment_id");
  const status = req.nextUrl.searchParams.get("status");
  const payment_type = req.nextUrl.searchParams.get("payment_type")

  if (!id_payment || !status || !payment_type) return Response.json({ message: "Faltan parámetros en la url" })

  try {
    if (status === "approved") return Response.redirect(new URL("/success", req.url))
  } catch (error) {
    return Response.json({
      message: "Error en el servidor: " + (error as TypeError).message,
    });
  }
}

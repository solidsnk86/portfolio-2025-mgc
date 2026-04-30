export async function GET() {
  try {
    return Response.json({ message: "Todo ok! 😄" });
  } catch (error) {
    return Response.json({ message: "Error en el servidor", error });
  }
}

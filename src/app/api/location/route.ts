export async function GET() {
  try {
    const response = await fetch("https://solid-geolocation.vercel.app/location", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return Response.json({ message: data.message }, { status: response.status });
    }
    
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { message: "Error fetching location: " + error },
      { status: 500 }
    );
  }
}

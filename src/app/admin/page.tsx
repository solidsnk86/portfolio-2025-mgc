import { redirect } from "next/navigation";
import { ClientAdminPage } from "./ClientAdminPage";

const OWN_IP = process.env.OWN_IP

export default async function AdminPage() {
  const { ip } = await fetch("https://solid-geolocation.vercel.app/location")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  if (!String(ip).startsWith(OWN_IP as string)) redirect("https://neo-wifi.vercel.app");
  return (
    <div className="h-full flex flex-col z-[999]">
      <header className="p-6 border-b border-[var(--border-color)] bg-[var(--header-bg-color)]">
        <h1 className="text-3xl font-semibold">Estadísticas del sitio</h1>
      </header>
      <div className="flex-1 overflow-hidden">
        <ClientAdminPage />
      </div>
    </div>
  );
}

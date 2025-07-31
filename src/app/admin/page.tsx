import { ClientAdminPage } from "./ClientAdminPage";

export default async function AdminPage() {
  
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

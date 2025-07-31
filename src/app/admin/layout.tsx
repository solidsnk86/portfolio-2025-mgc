import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100dvh] z-50">
      {/* Aside Panel */}
      <aside className="w-80 bg-[var(--header-bg-color)] border-r border-[var(--border-color)] p-6">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <div className="p-3 bg-blue-100 text-blue-800 rounded-lg">
            <span className="font-medium">Estadísticas</span>
          </div>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
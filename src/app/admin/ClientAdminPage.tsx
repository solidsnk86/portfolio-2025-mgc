"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./styles/table.module.css";
import { ChevronUp } from "lucide-react";

interface ViewsProps {
  id: string;
  visits_count: number;
  city_name: string;
  country_name: string;
  ip: string;
  created_at: Date | string;
  page: string;
  so: string;
  browser: string;
  version: string;
  emoji_flag: string;
}

const SkelletonTable = () => {
  return Array.from({ length: 10 }).map((_, indexRow) => (
    <tr key={indexRow} className="animate-pulse bg-[var(--header-bg-color)]">
      {Array.from({ length: 9 }).map((_, index) => (
        <td key={index} className="w-32">
          &nbsp;
        </td>
      ))}
    </tr>
  ));
};

export const ClientAdminPage = () => {
  const [views, setViews] = useState<ViewsProps[]>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [payload, setPayload] = useState<number>(10);

  const getAllVisits = useCallback(async () => {
    setIsloading(true);
    await fetch("/api/supabase/get-all-visits")
      .then((res) => res.json())
      .then((data) => {
        setViews(data.allViews);
        setIsloading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getAllVisits();
  }, [getAllVisits]);

  return (
    <div className="h-full flex flex-col p-6">
      {/* Table Container with Scroll */}
      <div className="flex-1 overflow-auto border border-[var(--border-color)] rounded-lg">
        <table className={`${styles.table} w-full`}>
          <thead className="sticky top-[-0.5px] z-10">
            <tr className="text-zinc-100">
              <th className="p-3 text-left border-b">Ciudad</th>
              <th className="p-3 text-left border-b">País</th>
              <th className="p-3 text-left border-b">IP</th>
              <th className="p-3 text-left border-b">Fecha</th>
              <th className="p-3 text-left border-b">Página</th>
              <th className="p-3 text-left border-b">SO</th>
              <th className="p-3 text-left border-b">Navegador</th>
              <th className="p-3 text-left border-b">Version</th>
              <th className="p-3 text-left border-b">Bandera</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              views?.slice(0, payload).map((view, index) => (
                <tr
                  key={view.id}
                  className={`hover:bg-[var(--header-bg-color)] text-sm ${
                    index % 2 === 0 ? "bg-zinc-900/50" : "bg-zinc-900/80"
                  }`}
                >
                  <td className="p-3 border-b w-40">{view.city_name}</td>
                  <td className="p-3 border-b w-36">{view.country_name}</td>
                  <td className="p-3 border-b w-36">{view.ip}</td>
                  <td className="p-3 border-b">
                    {new Date(view.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3 border-b">{view.page}</td>
                  <td className="p-3 border-b">{view.so}</td>
                  <td className="p-3 border-b">{view.browser}</td>
                  <td className="p-3 border-b">{view.version}</td>
                  <td className="p-3 border-b">{view.emoji_flag}</td>
                </tr>
              ))
            ) : (
              <SkelletonTable />
            )}
          </tbody>
        </table>
      </div>

      {/* Controls Section */}
      <div className="mt-6 space-y-4">
        <div className="flex justify-center">
          {views && payload < views?.length ? (
            <button
              onClick={() => {
                const table = document.querySelector("table");
                setPayload((prev) => prev + 10);
                table?.scrollIntoView({ block: "end", behavior: "smooth" });
              }}
              className="w-36 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cargar más
            </button>
          ) : (
            <button
              title="Contraer"
              onClick={() => setPayload(10)}
              className="flex mx-auto  justify-center w-36 px-6 py-3 bg-[var(--dialog-bg)] rounded-lg hover:opacity-80 transition-colors"
            >
              <ChevronUp />
            </button>
          )}
        </div>

        {/* Stats Section */}
        <div className="bg-[var(--header-bg-color)] p-4 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-medium">Total de vistas:</h3>
            {views?.slice(0, 1).map((view) => (
              <p key={view.id} className="text-xl font-bold text-blue-600">
                {view.visits_count}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

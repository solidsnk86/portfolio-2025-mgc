"use client";

import { ScrollToTopButton } from "@/shared/ui/ScrollToTop";
import { Format } from "@/shared/utils/Format";
import { Loader2, MoveLeft } from "lucide-react";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface GitHubApiProps {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

const fraunces = Fraunces({
  weight: ["400"],
  subsets: ["latin"],
});

export const ALlProjectsClient = () => {
  const [repos, setRepos] = useState<GitHubApiProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchRepos = useCallback(async () => {
    setIsLoading(true);
    await fetch("/api/repos", { method: "GET" }).then((res) => res.json()).then((repo) => {
      setIsLoading(false)
      setRepos(repo.allProjects)
    }).catch((error) => console.log(error))
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);
  
  return (  
    <section className="flex flex-col justify-center mx-auto md:max-w-3xl w-full p-6 bg-[var(--header-bg-color)] relative z-10 rounded-xl my-10">
      <Link
        href="/"
        className="flex gap-2 items-center text-[var(--mutted-color)] hover:brightness-125 group"
      >
        <MoveLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Volver</span>
      </Link>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-[400px]" />
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold my-4">Todos los Proyectos</h1>
          <div className="flex flex-col space-y-3">
            {repos?.filter((repo) => {
                const excluded = [
                  "doubleCommit.ts",
                  "background-remover",
                  "curriculumweb",
                  "cdn-js",
                  "neo-wifi-desktop",
                  "python-finales",
                  "pruebas-js-camara",
                  "PortfolioGrupal",
                  "electron",
                  "dashboard-369",
                  "CvOnline-modelo1",
                  "Carniceria-Nievas",
                  "double-commit",
                  "node-js-class",
                  "Electron-ServiciosElectricos",
                  "TP-Grupo-GitHub",
                  "Tecnicatura_UTN"
                ];
                return !excluded.includes(repo.name);
              })
              .sort(
                (a, b) =>
                  new Date(b.created_at).getTime() -
                  new Date(a.created_at).getTime()
              )
              .map((repo, i) => (
                <Link
                  href={`/projects/${repo.name}`}
                  key={`${repo.name}-${i}`}
                  className="flex flex-col mb-2 relative py-5 px-3"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl project-item" />
                  <div className="flex gap-4 text-[var(--mutted-color)]">
                    <time>{Format.date({ dateTime: repo.created_at })}</time>
                    <strong>{repo.name}</strong>
                  </div>
                  <h3 className={`${fraunces.className} text-xl font-semibold`}>
                    {repo.description}
                  </h3>
                </Link>
              ))}
          </div>
        </>
      )}
      <ScrollToTopButton />
    </section>
  );
};

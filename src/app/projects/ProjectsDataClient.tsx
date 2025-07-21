"use client";

import MarkdownRenderer from "@/Components/MarkDownRenderer";
import { Format } from "@/shared/utils/Format";
import { Loader2, MoveLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface ReleaseAPI {
  release?: {
    htmlURL: string;
    appName: string;
    appVersion: string;
    fileName: string;
    fileSize: string;
    createdAt: string;
    updatedAt: string;
    downloadURL: string;
    downloadCount: number;
    appInfo: string;
  };
}

interface GithubApiProps extends ReleaseAPI {
  id: string;
  created_at: string;
  topics: string[];
}

export const ProjectDataClient = ({ repo }: { repo: string }) => {
  const [projectData, setProjectData] = useState<string>();
  const [repoData, setRepoData] = useState<GithubApiProps>({
    id: "",
    created_at: "",
    topics: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getDataDesktopProject = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch("https://neo-wifi.vercel.app/api/releases", {
        method: "GET",
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setIsLoading(false)
      setProjectData(data.release.appInfo);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  const getDataProject = useCallback(async () => {
    try {
      setIsLoading(true);
      await fetch(`/api/repo?name=${repo}`).then((res) => res.json()).then((rep) => {
        setRepoData(rep.data)
        setProjectData(rep.decoded)
      })
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [repo]);

  useEffect(() => {
    if (repo !== "neo-wifi-desktop") {
      getDataProject()
    } else {
      getDataDesktopProject()
    }
  }, [repo, getDataProject, getDataDesktopProject]);

  return (
    <section className="flex flex-col justify-center mx-auto md:max-w-3xl w-full p-6 bg-[var(--header-bg-color)] relative z-0 rounded-xl my-10">
      <button
        onClick={() => window.history.back()}
        className="flex gap-2 items-center text-[var(--mutted-color)] hover:brightness-125 group cursor-pointer"
      >
        <MoveLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Volver</span>
      </button>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-[500px]" />
        </div>
      ) : (
        <>
          <header className="mt-4 flex flex-col">
            <time>
              Creado el {Format.date({ dateTime: repoData.created_at || "2025-02-26T08:33:15Z" })}
            </time>
            <div className="flex gap-3 w-full overflow-x-auto">
              {repoData.topics.map((topic, index) => (
                <span
                  key={`${topic}-${index}`}
                  className="px-2 rounded-xl bg-[var(--icon-bg)] whitespace-nowrap mt-3 text-sm flex items-center justify-center h-8"
                >
                  <small className="uppercase sunset-gradient font-semibold">
                    {topic}
                  </small>
                </span>
              ))}
            </div>
          </header>
          <MarkdownRenderer content={projectData || ""} />
        </>
      )}
    </section>
  );
};

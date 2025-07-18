"use client";

import MarkdownRenderer from "@/Components/MarkDownRenderer";
import { Format } from "@/shared/utils/Format";
import { Loader, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

interface GithubApiProps {
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

  const getDataProject = useCallback(async () => {
    try {
      setIsLoading(true);
      const [readmeResponse, repoData] = await Promise.all([
        fetch(`https://api.github.com/repos/solidsnk86/${repo}/readme`, {
          method: "GET",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }),
        fetch(`https://api.github.com/repos/solidsnk86/${repo}`, {
          method: "GET",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }),
      ]);
      if (!readmeResponse.ok) throw new Error(readmeResponse.statusText);
      if (!repoData.ok) throw new Error(repoData.statusText);
      const readme = await readmeResponse.json();
      const data = await repoData.json();
      const decoded = Buffer.from(readme.content, "base64").toString("utf-8");
      setIsLoading(false);
      setRepoData(data);
      setProjectData(decoded);
    } catch (error) {
      console.log(error);
    }
  }, [repo]);

  useEffect(() => {
    getDataProject();
  }, [getDataProject]);

  return (
    <section className="flex flex-col justify-center mx-auto md:max-w-3xl w-full p-6 bg-[var(--header-bg-color)] relative z-0 rounded-xl my-10">
      <Link
        href="/#projects"
        className="flex gap-2 items-center text-[var(--mutted-color)] hover:brightness-125"
      >
        <MoveLeft />
        <span>Volver</span>
      </Link>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader className="animate-spin h-[400px]" />
        </div>
      ) : (
        <>
          <header className="mt-4 flex flex-col">
            <time>Creado el {Format.date({ dateTime: repoData.created_at })}</time>
            <div className="flex gap-3">
              {repoData.topics.map((topic, index) => (
                <small
                  key={`${topic}-${index}`}
                  className="px-2 uppercase bg-zinc-200/30 rounded-full my-1 text-blue-400 font-semibold"
                >
                  {topic}
                </small>
              ))}
            </div>
          </header>
          <MarkdownRenderer content={projectData || ""} />
        </>
      )}
    </section>
  );
};

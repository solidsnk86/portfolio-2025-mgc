"use client";

import MarkdownRenderer from "@/Components/MarkDownRenderer";
import { Loader, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const ProjectDataClient = ({ repo }: { repo: string }) => {
  const [projectData, setProjectData] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getDataProject = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/solidsnk86/${repo}/readme`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!response.ok) throw new Error(response.statusText)
      
      const data = await response.json();
      const decoded = Buffer.from(data.content, "base64").toString("utf-8");
      setIsLoading(false);
      setProjectData(decoded);
    } catch (error) {
      console.log(error);
    }
  }, [repo]);


  useEffect(() => {
    getDataProject();
  }, [getDataProject]);
  

  return (
    <section className="flex flex-col justify-center mx-auto max-w-3xl p-6 bg-[var(--header-bg-color)] relative z-50">
      <Link
        href="/#projects"
        className="flex gap-2 items-center text-[var(--mutted-color)] hover:brightness-125"
      >
        <MoveLeft />
        <span>Volver</span>
      </Link>
      {isLoading ? (
        <div className="flex justify-center items-center h-[600px]">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <MarkdownRenderer content={projectData || ""} />
      )}
    </section>
  );
};

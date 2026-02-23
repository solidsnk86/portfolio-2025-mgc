"use client";

import MarkdownRenderer from "@/components/MarkDownRenderer";
import { ScrollToTopButton } from "@/shared/ui/ScrollToTop";
import { Loader2, MoveLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const BlogClient = ({ blog }: { blog: string }) => {
  const [blogContent, setBlogContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error,setError] = useState<TypeError | Error | undefined>(undefined);

  const readBlog = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetch(`/api/read-blog?name=${blog}`)
        .then((res) => res.json())
        .then((data) => {
          setBlogContent(data.blogContent);
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error as TypeError)
    }
  }, [blog]);

  useEffect(() => {
    readBlog();
  }, [readBlog]);
  
  return (
    <section className="flex flex-col justify-center mx-auto md:max-w-3xl w-full p-6 bg-[var(--header-bg-color)] relative z-0 rounded-xl my-10">
      <button
        onClick={() => window.history.back()}
        className="flex gap-2 items-center text-[var(--mutted-color)] hover:brightness-125 group cursor-pointer mb-4"
      >
        <MoveLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Volver</span>
      </button>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-[500px]" />
        </div>
      ) : (
        <div>
          <MarkdownRenderer content={blogContent} />
        </div>
      )}
      <ScrollToTopButton />
      {error && (
        <small className="px-2 py-0.5 border-red-300/50 bg-red-500/80 text-white rounded">{error.message}</small>
      )}
    </section>
  );
};

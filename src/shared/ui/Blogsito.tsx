"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Fraunces } from "next/font/google";
import { Loader2 } from "lucide-react";
import { Format } from "../utils/Format";

const fraunces = Fraunces({
  weight: ["400"],
  subsets: ["latin"],
});

interface BlogsitoProps {
  name: string;
  title: string;
  date: string;
}

export const Blogsito = () => {
  const [allBlogs, setAllBlogs] = useState<BlogsitoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllBlogs = useCallback(async () => {
    setIsLoading(true);
    await fetch("api/all-blogs")
      .then((res) => res.json())
      .then((data) => {setAllBlogs(data.blog); setIsLoading(false);});
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  return (
    <section className="flex flex-col p-4 max-w-3xl z-10" id="blog">
      <div className="flex justify-between items-center p-1">
        <h3 className="text-[var(--mutted-color)] text-sm font-semibold tracking-[0.15em] pl-4">
          BLOG
        </h3>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-[250px]" />
        </div>
      ) : (
        allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((blog, i) => (
          <Link
            href={`/blog/${blog.name}`}
            key={`${blog.name}-${i}`}
            className="flex flex-col mb-2 relative py-5 px-4"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl project-item" />
            <div className="flex gap-4 text-[var(--mutted-color)]">
              <time>{Format.date({ dateTime: blog.date })}</time>
              <strong>{blog.name}</strong>
            </div>
            <h3 className={`${fraunces.className} text-xl font-semibold`}>
              {blog.title}
            </h3>
          </Link>
        ))
      )}
    </section>
  );
};

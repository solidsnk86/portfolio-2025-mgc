"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Fraunces } from "next/font/google";

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

  const getAllBlogs = useCallback(async () => {
    await fetch("api/all-blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data.blog));
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  return (
    <section className="flex flex-col p-4 max-w-3xl z-10" id="projects">
      <div className="flex justify-between items-center p-1">
        <h3 className="text-[var(--mutted-color)] text-sm font-semibold tracking-[0.15em] pl-4">
          BLOG
        </h3>
      </div>
      {allBlogs.map((blog, i) => (
        <Link
          href={`/blog/${blog.name}`}
          key={`${blog.name}-${i}`}
          className="flex flex-col mb-2 relative py-5 px-4"
        >
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl project-item" />
          <div className="flex gap-4 text-[var(--mutted-color)]">
            <time>{blog.date}</time>
            <strong>{blog.name}</strong>
          </div>
          <h3 className={`${fraunces.className} text-xl font-semibold`}>
            {blog.title}
          </h3>
        </Link>
      ))}
    </section>
  );
};

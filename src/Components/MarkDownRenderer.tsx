/* eslint-disable @next/next/no-img-element */
"use client";

import "highlight.js/styles/an-old-hope.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useRef } from "react";

export default function MarkdownRenderer({ content }: { content: string }) {
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <ReactMarkdown
      rehypePlugins={[
        rehypeRaw,
        rehypeHighlight,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]}
      components={{
        h1: ({ children }) => (
          <h1 className="mt-8 mb-4 text-3xl font-bold pb-2 border-b border-[var(--border-color)]">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-6 mb-3 text-2xl font-semibold pb-2 border-b border-[var(--border-color)]">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-4 mb-2 text-xl font-semibold">{children}</h3>
        ),
        pre: ({ children }) => (
          <div className="my-3 code-block relative">
            <pre className="p-2 bg-[#1C1D21] rounded-lg" ref={preRef}>
              {children}
            </pre>
          </div>
        ),
        li: ({ children }) => (
          <li className="mb-2 list-disc list-inside">{children}</li>
        ),
        a: ({ children }) => (
          <a href={children as string} target="_blank">
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          <img
            src={src as string}
            alt={alt as string}
            className="rounded-lg my-4 mx-auto h-full w-full"
          />
        ),
        hr: () => <hr className="my-4 border-2 border-[var(--mutted-color)]" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

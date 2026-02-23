"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface BlogsitoProps {
  name: string;
  title: string;
  date: string;
}

interface BlogsitoProviderProps {
  allBlogs: BlogsitoProps[];
  isLoading: boolean;
  error: TypeError | Error | undefined;
  getBlogByName: (name: string) => BlogsitoProps | undefined;
}

export const BlogContext = createContext<BlogsitoProviderProps | null>(null);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [allBlogs, setAllBlogs] = useState<BlogsitoProps[]>([]);
  const [error, setError] = useState<TypeError | Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllBlogs = useCallback(async () => {
    setIsLoading(true);
    await fetch("/api/all-blogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data.blog);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  const getBlogByName = (name: string) => {
    return allBlogs.find((blog) => blog.name === name);
  }

  const values = {
    isLoading,
    error,
    allBlogs,
    getBlogByName
  };

  return <BlogContext value={values}>{children}</BlogContext>;
};

export const useBlog = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("Debe ser usada denttro del provider");
  return ctx;
};

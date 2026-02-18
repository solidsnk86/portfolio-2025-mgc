"use client";

import type { GitHubRepo } from "@/app/types/github-api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AllProjects = GitHubRepo;

interface ProjectsProviderProps {
  projects: AllProjects[];
  isLoading: boolean;
  error: Error | TypeError | undefined;
  getProjectByName: (name: string) => GitHubRepo | undefined;
}

export const ProjectContext = createContext<ProjectsProviderProps | undefined>(
  undefined,
);

export const ProjectProvider = ({

  children,
}: {
  children: ReactNode;
}) => {
  const [projects, setProjects] = useState<AllProjects[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | TypeError | undefined>(undefined);

  const getAllProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/repos");
      const projectsData = await response.json();
      if (!response.ok) throw new Error(projectsData.message);
      setProjects(projectsData.allProjects);
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  };

  const getProjectByName = (name: string) => {
    return projects.find((project) => project.name === name);
  } 

  useEffect(() => {
    getAllProjects();
  }, []);

  const values = {
    isLoading,
    projects,
    error,
    getProjectByName
  };

  return <ProjectContext value={values}>{children}</ProjectContext>;
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("El contexto debe ser usado dentro del provider.");
  return context;
};

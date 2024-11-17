"use client";

import { createContext, ReactNode, useContext } from "react";
import { ProjectItem } from "src/entities/projects/projects";

interface ProjectsContextProps {
  data: ProjectItem[];
}

interface ProjectsClientProviderProps extends ProjectsContextProps {
  children: ReactNode;
}

const ProjectsContext = createContext<ProjectsContextProps>({
  data: [],
});

function ProjectsClientProvider({
  data,
  children,
}: ProjectsClientProviderProps) {
  return (
    <ProjectsContext.Provider value={{ data }}>
      {children}
    </ProjectsContext.Provider>
  );
}

const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error("useProjects must be used within a ProjectsClientProvider");
  }

  return context;
};

export { ProjectsClientProvider, useProjects };

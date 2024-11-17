import { ReactNode } from "react";
import { projectsService } from "src/entities/projects/projects.service";
import { ProjectsClientProvider } from "./ProjectsClientProvider";

async function ProjectsServerProvider({ children }: { children: ReactNode }) {
  const projects = await projectsService.getProjects();

  return (
    <ProjectsClientProvider data={projects}>{children}</ProjectsClientProvider>
  );
}

export default ProjectsServerProvider;

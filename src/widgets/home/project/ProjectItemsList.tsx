"use client";

import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import { useProjects } from "src/core/providers/projects/ProjectsClientProvider";
import Project from "./Project";

function ProjectItemsList() {
  const { data: projects } = useProjects();

  const limitedProjects = projects.slice(0, 4);

  return (
    <section className="project-items-list ">
      <div className="wrapper py-8">
        <Container className="flex flex-col gap-8">
          <Headline className="font-medium">Recent Projects</Headline>

          <div className="projects-wrapper overflow-hidden flex flex-col gap-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {limitedProjects.map((project) => (
                <Project
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default ProjectItemsList;

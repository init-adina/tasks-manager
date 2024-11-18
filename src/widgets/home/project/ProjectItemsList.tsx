"use client";

import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import SwiperNext from "@shared/libs/swiper/SwiperNext";
import { useTasks } from "src/core/providers/tasks/TasksClientProvider";
import { useProjects } from "src/core/providers/projects/ProjectsClientProvider";
import Project from "./Project";

function ProjectItemsList() {
  const { data: tasks } = useTasks();

  const { data: projects } = useProjects();

  const limitedProjects = projects.slice(0, 4);

  return (
    <section className="project-items-list ">
      <div className="wrapper">
        <Container className="flex flex-col gap-8">
          <Headline>Recent Projects</Headline>

          <div className="projects-wrapper overflow-hidden flex flex-col gap-8 rounded-xl">
            <div className="lg:hidden">
              <SwiperNext
                spaceBetween={20}
                options={{
                  breakpoints: {
                    320: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                  },
                }}
                slides={tasks.map((task, index) => (
                  <div
                    key={index}
                    className="swiper-slide shrink-0"
                  >
                    <Project {...task} />
                  </div>
                ))}
              />
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {limitedProjects.map((project) => (
                <Project
                  key={project.id}
                  {...project}
                />
              ))}
            </div>

            {/* <Link
              href="/projects"
              className="flex justify-center"
            >
              <Button
                theme="secondary"
                size="none"
                className="px-8 py-3 capitalize"
              >
                See All
              </Button>
            </Link> */}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default ProjectItemsList;

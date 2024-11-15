"use client";

import ProjectItem from "./ProjectItem";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import SwiperNext from "@shared/libs/swiper/SwiperNext";
import { useTasks } from "src/core/providers/users/TasksClientProvider";

function ProjectItemsList() {
  const { data: tasks } = useTasks();

  return (
    <section className="project-items-list ">
      <div className="wrapper py-12">
        <Container className="flex flex-col gap-8">
          <Headline>Recent Projects</Headline>

          <div className="projects-wrapper overflow-hidden rounded-xl">
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
                    <ProjectItem {...task} />
                  </div>
                ))}
              />
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tasks.map((task) => (
                <ProjectItem
                  key={task.id}
                  {...task}
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

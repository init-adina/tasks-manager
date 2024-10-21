import { projectItems } from "@shared/data/ProjectItemData";
import ProjectItem from "./ProjectItem";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import SwiperNext from "@shared/libs/swiper/SwiperNext";

function ProjectItemsList() {
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
                slides={projectItems.map((projectItem, index) => (
                  <div
                    key={index}
                    className="swiper-slide shrink-0"
                  >
                    <ProjectItem {...projectItem} />
                  </div>
                ))}
              />
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
              {projectItems.map((projectItem, index) => (
                <ProjectItem
                  key={index}
                  {...projectItem}
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

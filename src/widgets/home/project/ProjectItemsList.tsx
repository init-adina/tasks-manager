import { projectItems } from "@shared/data/ProjectItemData";
import ProjectItem from "./ProjectItem";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";

function ProjectItemsList() {
  return (
    <section className="project-items-list ">
      <div className="wrapper py-12">
        <Container className="flex flex-col gap-8">
          <Headline>Recent Projects</Headline>

          <div className="grid grid-cols-3 gap-8 ">
            {projectItems.map((projectItem, index) => (
              <ProjectItem
                key={index}
                {...projectItem}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default ProjectItemsList;

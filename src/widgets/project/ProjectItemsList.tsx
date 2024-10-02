import { projectItems } from "@shared/data/ProjectItemData";
import ProjectItem from "./ProjectItem";
import Container from "@shared/ui/Container";

function ProjectItemsList() {
  return (
    <section className="project-items-list ">
      <Container>
        <div className="grid grid-cols-4 gap-8 xl:py-20 py-12">
          {projectItems.map((projectItem, index) => (
            <ProjectItem
              key={index}
              {...projectItem}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectItemsList;

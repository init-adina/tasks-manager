import { projectItems } from "@shared/data/ProjectItemData";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import ProjectItem from "@widgets/home/project/ProjectItem";

function MyTasksList() {
  return (
    <section className="my-tasks-list">
      <Container>
        <div className="pb-12 flex flex-col gap-4">
          <Headline>My Tasks</Headline>
          <div className="grid grid-cols-3 gap-8 ">
            {projectItems.map((projectItem, index) => (
              <ProjectItem
                key={index}
                {...projectItem}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MyTasksList;

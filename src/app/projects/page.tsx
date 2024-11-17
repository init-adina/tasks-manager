import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import ProjectsList from "@widgets/projects/ProjectsList";

function ProjectsPage() {
  return (
    <>
      <Container>
        <div className="py-8 flex flex-col gap-8">
          <div className="headline text-center">
            <Headline>Projects</Headline>
          </div>

          <ProjectsList />
        </div>
      </Container>
    </>
  );
}

export default ProjectsPage;

import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import ProjectsList from "@widgets/projects/ProjectsList";

function ProjectsPage() {
  return (
    <>
      <Container>
        <div className="wrapper py-8 flex flex-col text-center gap-8">
          <Headline>Projects</Headline>

          <ProjectsList />
        </div>
      </Container>
    </>
  );
}

export default ProjectsPage;

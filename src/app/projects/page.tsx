"use client";

import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import AddProject from "@widgets/add-project/AddProject";
import ProjectsList from "@widgets/projects/ProjectsList";
import { useState } from "react";

function ProjectsPage() {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);

  const handleAddProject = () => {
    setShowAddProject(true);
  };

  const handleCloseProject = () => {
    setShowAddProject(false);
  };

  return (
    <>
      <Container>
        <div className="wrapper py-8 flex flex-col text-center gap-8">
          <Headline>Projects</Headline>

          <ProjectsList />

          <Button
            onClick={handleAddProject}
            theme="secondary"
          >
            Add Project
          </Button>

          {showAddProject && <AddProject onClose={handleCloseProject} />}
        </div>
      </Container>
    </>
  );
}

export default ProjectsPage;

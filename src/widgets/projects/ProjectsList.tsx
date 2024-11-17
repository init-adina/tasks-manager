"use client";

import { useProjects } from "src/core/providers/projects/ProjectsClientProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LinearProgress } from "@mui/material";

function ProjectsList() {
  const { data: projects } = useProjects();

  return (
    <section className="projects-list">
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item cursor-pointer  p-6 shadow-md text-sm border flex flex-col gap-2 rounded-md bg-white"
          >
            <div className="start-date-icon flex items-center justify-between">
              <div className="start-date">{project.start_date}</div>

              <MoreVertIcon sx={{ width: "20px", height: "20px" }} />
            </div>

            <div className="project-name text-base fkex justify-center text-center capitalize">
              {project.name}
            </div>

            <div className="progress-bar flex flex-col gap-2 ">
              <div className="progress flex items-center justify-between">
                <span className="font-medium">Progress</span>

                <span> {project.progress}%</span>
              </div>

              <LinearProgress
                variant="determinate"
                value={project.progress}
                className=" rounded-md"
              />
            </div>

            <div className="status  flex items-center justify-between">
              <span className="font-medium">Status</span>

              <span>{project.status}</span>
            </div>

            <div className="tasks flex items-center justify-between">
              <span className="font-medium">Tasks</span>

              <div className="flex items-center">
                {project.tasks.length > 0
                  ? project.tasks.map((task) => task.title).join(", ")
                  : "No tasks"}
              </div>
            </div>

            <div className="users flex items-center justify-between">
              <span className="font-medium">Users</span>

              <div className="flex items-center">
                {project.users.length > 0
                  ? project.users.map((user) => user.name).join(", ")
                  : "No users"}
              </div>
            </div>

            <div className="manager flex items-center justify-between">
              <span className="font-medium">Manager</span>

              <span>{project.manager.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;

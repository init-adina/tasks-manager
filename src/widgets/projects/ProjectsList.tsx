"use client";

import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "@shared/api";
import { ProjectItem } from "src/entities/projects/projects";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { projectsService } from "src/entities/projects/projects.service";
import EditProject from "./EditProject";

function ProjectsList() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [editProjectId, setEditProjectId] = useState<number | null>(null);
  const [editProject, setEditProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/projects");
        console.log(res.data);
        setProjects(res.data);
      } catch (err) {
        console.log("Error fetching projeects", err);
      }
    })();
  }, []);

  const handleDelete = async (projectId: number) => {
    try {
      await projectsService.deleteProject(projectId);

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );

      console.log("Проект успешно удален");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Ошибка при удалении проекта:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  const handleEdit = (project: ProjectItem) => {
    setEditProjectId(project.id);
    setEditProject({ ...project });
  };

  const handleCancelEdit = () => {
    setEditProjectId(null);
    setEditProject(null);
  };

  return (
    <section className="projects-list relative">
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item cursor-pointer p-6 shadow-md text-sm border flex flex-col gap-2 rounded-md bg-white"
          >
            <div className="start-date-icon flex items-center justify-between">
              <div className="start-date">{project.start_date}</div>

              <div className="icons flex items-center gap-2">
                <EditIcon
                  className="hover:text-primary-400"
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleEdit(project)}
                />
                <DeleteIcon
                  className="hover:text-primary-400"
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleDelete(project.id)}
                />
              </div>
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
                  : "no tasks"}
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

            <div className="deadline flex items-center justify-between">
              <span className="font-medium">Deadline</span>

              <span>{project.deadline}</span>
            </div>
          </div>
        ))}
      </div>

      {editProjectId && editProject && (
        <EditProject
          projectId={editProjectId}
          initialProjectData={editProject}
          onCancelEdit={handleCancelEdit}
        />
      )}
    </section>
  );
}

export default ProjectsList;

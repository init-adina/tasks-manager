import { AxiosError } from "axios";
import { AddProjectRequest, ProjectItem } from "./projects";
import { api } from "@shared/api";

class ProjectsService {
  async getProjects() {
    try {
      const res = await api.get<ProjectItem[]>("/projects");

      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
      }
    }
  }

  async addProject(newProject: AddProjectRequest) {
    try {
      const res = await api.post<AddProjectRequest>("/projects", newProject);
      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error("Ошибка при добавлении проекта:", e.message);
        throw new Error(
          e.response?.data?.message || "Не удалось добавить проект"
        );
      }
    }
  }

  async deleteProject(projectId: number) {
    try {
      const res = await api.delete(`/projects/${projectId}`);
      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error("Ошибка при удалении проекта:", e.message);
        throw new Error(
          e.response?.data?.message || "Не удалось удалить проект"
        );
      }
    }
  }
}

export const projectsService = new ProjectsService();

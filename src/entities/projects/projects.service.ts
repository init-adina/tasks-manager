import { AxiosError } from "axios";
import { ProjectItem } from "./projects";
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
}

export const projectsService = new ProjectsService();

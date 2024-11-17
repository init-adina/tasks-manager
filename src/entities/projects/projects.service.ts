import axios from "axios";
import { ProjectItem } from "./projects";

class ProjectsService {
  async getProjects(): Promise<ProjectItem[]> {
    try {
      const res = await axios.get<ProjectItem[]>(
        "http://localhost:8000/api/v1/projects"
      );

      return res.data;
    } catch (e) {
      console.log(e);
      throw new Error("Unresolved to get projects");
    }
  }
}

export const projectsService = new ProjectsService();

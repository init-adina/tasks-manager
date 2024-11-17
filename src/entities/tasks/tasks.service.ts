import axios from "axios";
import { TasksItem } from "./tasks";

class TasksService {
  async getUsers(): Promise<TasksItem[]> {
    try {
      const res = await axios.get<TasksItem[]>(
        "https://e8bb40d83c860073.mokky.dev/tasks"
      );
      return res.data;
    } catch (e) {
      console.log(e);
      throw new Error("Unresolved to get users");
    }
  }
}

export const usersService = new TasksService();

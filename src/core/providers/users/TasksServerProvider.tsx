import { ReactNode } from "react";
import { usersService } from "src/entities/users/tasks.service";
import { TasksClientProvider } from "./TasksClientProvider";

async function TasksServerProvider({ children }: { children: ReactNode }) {
  const users = await usersService.getUsers();

  return <TasksClientProvider data={users}>{children}</TasksClientProvider>;
}

export default TasksServerProvider;

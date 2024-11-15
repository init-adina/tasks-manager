"use client";

import { createContext, ReactNode, useContext } from "react";
import { TasksItem } from "src/entities/users/tasks";

interface TasksContextProps {
  data: TasksItem[];
}

interface UsersClientProviderProps extends TasksContextProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextProps>({
  data: [],
});

function TasksClientProvider({ data, children }: UsersClientProviderProps) {
  return (
    <TasksContext.Provider value={{ data }}>{children}</TasksContext.Provider>
  );
}

const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksClientProvider");
  }

  return context;
};

export { TasksClientProvider, useTasks };

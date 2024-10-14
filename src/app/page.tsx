import ProjectItemsList from "@widgets/main/project/ProjectItemsList";
import TasksList from "@widgets/main/tasks/TasksList";

export default function Home() {
  return (
    <div>
      <TasksList />
      <ProjectItemsList />
    </div>
  );
}

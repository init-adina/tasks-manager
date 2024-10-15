import ProjectItemsList from "@widgets/home/project/ProjectItemsList";
import TasksList from "@widgets/home/tasks/TasksList";

export default function Home() {
  return (
    <div>
      <TasksList />
      <ProjectItemsList />
    </div>
  );
}

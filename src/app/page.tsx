import Container from "@shared/ui/Container";
import ProjectItemsList from "@widgets/project/ProjectItemsList";
import TasksList from "@widgets/tasks/TasksList";
import TaskListTwo from "@widgets/tasks/TasksListTwo";

export default function Home() {
  return (
    <div>
      <TasksList />
      <ProjectItemsList />
    </div>
  );
}

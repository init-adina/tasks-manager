import MainSwiper from "@widgets/home/mainSwiper/MainSwiper";
import ProjectItemsList from "@widgets/home/project/ProjectItemsList";
import TasksList from "@widgets/home/tasks/TasksList";

export default function Home() {
  return (
    <>
      <MainSwiper />
      <TasksList />
      <ProjectItemsList />
    </>
  );
}

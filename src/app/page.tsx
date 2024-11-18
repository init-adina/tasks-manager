import CompanyInfo from "@widgets/home/companyInfo/CompanyInfo";
import MainSwiper from "@widgets/home/mainSwiper/MainSwiper";
import ProjectItemsList from "@widgets/home/project/ProjectItemsList";
import TasksList from "@widgets/home/tasks/TasksList";

export default function Home() {
  return (
    <div className="py-12 flex flex-col gap-12">
      <MainSwiper />
      <TasksList />
      <ProjectItemsList />
      <CompanyInfo />
    </div>
  );
}

import Clients from "@widgets/home/clients/Clients";
import CompanyInfo from "@widgets/home/companyInfo/CompanyInfo";
import OurWorks from "@widgets/home/ourWorks/OurWorks";
import Poster from "@widgets/home/Poster";
import ProjectItemsList from "@widgets/home/project/ProjectItemsList";
import TasksList from "@widgets/home/tasks/TasksList";

export default function Home() {
  return (
    <>
      <Poster />
      <TasksList />
      <ProjectItemsList />
      <OurWorks />
      <Clients />
      <CompanyInfo />
    </>
  );
}

import Clients from "@widgets/home/clients/Clients";
import CompanyInfo from "@widgets/home/companyInfo/CompanyInfo";
import MainSwiper from "@widgets/home/mainSwiper/MainSwiper";
import OurWorks from "@widgets/home/ourWorks/OurWorks";
import TasksList from "@widgets/home/tasks/TasksList";

export default function Home() {
  return (
    <div className="py-12 flex flex-col gap-12">
      <MainSwiper />
      <TasksList />
      {/* <ProjectItemsList /> */}
      <OurWorks />
      <Clients />
      <CompanyInfo />
    </div>
  );
}

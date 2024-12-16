import Clients from "@widgets/home/clients/Clients";
import CompanyInfo from "@widgets/home/companyInfo/CompanyInfo";
import OurWorks from "@widgets/home/ourWorks/OurWorks";
import Poster from "@widgets/home/Poster";

export default function Home() {
  return (
    <>
      <Poster />
      <OurWorks />
      <Clients />
      <CompanyInfo />
    </>
  );
}

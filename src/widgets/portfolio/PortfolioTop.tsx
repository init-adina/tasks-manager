import Container from "@shared/ui/Container";
import PortfolioSidebar from "./components/PortfolioSidebar";
import PortfolioInfoBar from "./components/PortfolioInfoBar";

function PortfolioTop() {
  return (
    <section className="portfolio-top">
      <Container>
        <div className="pb-12 grid grid-cols-1  md:grid-cols-5 xl:grid-cols-4 gap-4 ">
          <div className="md:col-span-2 xl:col-span-1">
            <PortfolioSidebar />
          </div>

          <div className="md:col-span-3 xl:col-span-3">
            <PortfolioInfoBar />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PortfolioTop;

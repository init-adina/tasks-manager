import WithAuth from "@shared/hoc/WithAuth";
import PortfolioTop from "@widgets/portfolio/PortfolioTop";

function Portfolio() {
  return (
    <WithAuth>
      <div className="py-12 flex flex-col gap-8">
        <PortfolioTop />
      </div>
    </WithAuth>
  );
}

export default Portfolio;

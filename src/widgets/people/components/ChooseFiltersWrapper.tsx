import Container from "@shared/ui/Container";
import FilterOrganization from "./FilterOrganization";
import FilterPosition from "./FilterPosition";

function ChooseFiltersWrapper() {
  return (
    <section className="choose-filters-wrapper">
      <Container>
        <div className="py-12 flex items-center gap-8">
          <FilterOrganization />
          <FilterPosition />
        </div>
      </Container>
    </section>
  );
}

export default ChooseFiltersWrapper;

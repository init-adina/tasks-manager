import TopInfoSearch from "@widgets/people/TopInfoSearch";
import ChooseFiltersWrapper from "@widgets/people/components/ChooseFiltersWrapper";
import PeopleItemsWrapper from "@widgets/people/components/PeopleItemsWrapper";

function People() {
  return (
    <div className="py-12">
      <TopInfoSearch />
      <ChooseFiltersWrapper />
      <PeopleItemsWrapper />
    </div>
  );
}

export default People;

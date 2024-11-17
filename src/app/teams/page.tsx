"use client";

import TopInfoSearch from "@widgets/teams/TopInfoSearch";
import ChooseFiltersWrapper from "@widgets/teams/components/ChooseFiltersWrapper";
import PeopleItemsWrapper from "@widgets/teams/components/PeopleItemsWrapper";

function Team() {
  return (
    <div className="py-8">
      <TopInfoSearch />
      <ChooseFiltersWrapper />
      <PeopleItemsWrapper />
    </div>
  );
}

export default Team;

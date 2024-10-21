import { teamItems } from "@shared/data/TeamItemData";
import TeamItem from "./TeamItem";

function TeamItemsWrapper() {
  return (
    <section className="team-items grid grid-cols-1 sm:grid-cols-2  gap-4 lg:hidden">
      {teamItems.map((teamItem, index) => (
        <TeamItem
          key={index}
          {...teamItem}
        />
      ))}
    </section>
  );
}

export default TeamItemsWrapper;

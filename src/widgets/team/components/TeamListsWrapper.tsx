import { teamItems } from "@shared/data/TeamItemData";
import TeamListItem from "./TeamListItem";

function TeamListsWrapper() {
  return (
    <div className="team-list-wrapper flex flex-col">
      {teamItems.map((teamItem, index) => (
        <TeamListItem
          key={index}
          {...teamItem}
        />
      ))}
    </div>
  );
}

export default TeamListsWrapper;

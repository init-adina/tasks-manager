import { teamItems } from "@shared/data/TeamItemData";
import Container from "@shared/ui/Container";
import TeamListItem from "./components/TeamListItem";

function TeamList() {
  return (
    <section className="team-list">
      <div className="py-12">
        <Container>
          <div className="team-list-wrapper border shadow-md rounded-md">
            <div className="top-team-list text-gray-500 text-sm font-medium grid grid-cols-7 border-b">
              <div className="designer-wrapper col-span-2 py-2 px-4 border-r">
                Name
              </div>

              <div className="task col-span-2 py-2 px-4 border-r">Task</div>

              <div className="status col-span-1 py-2 px-4 border-r">Status</div>

              <div className="priority col-span-1  py-2 px-4 border-r">
                Priority
              </div>

              <div className="last-update col-span-1 py-2 px-4">
                Last Update
              </div>
            </div>

            <div className="team-list-wrapper flex flex-col">
              {teamItems.map((teamItem, index) => (
                <TeamListItem
                  key={index}
                  {...teamItem}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default TeamList;

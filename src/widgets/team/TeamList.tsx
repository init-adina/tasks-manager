import Container from "@shared/ui/Container";
import TeamListTop from "./components/TeamListTop";
import TeamListsWrapper from "./components/TeamListsWrapper";
import TeamItemsWrapper from "./components/TeamItemsWrapper";

function TeamList() {
  return (
    <section className="team-list">
      <div className="py-12">
        <Container>
          <div className="team-list-wrapper ">
            <div className="hidden lg:block border shadow-md rounded-md">
              <TeamListTop />

              <TeamListsWrapper />
            </div>

            <TeamItemsWrapper />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default TeamList;

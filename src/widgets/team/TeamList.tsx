import Container from "@shared/ui/Container";
import TeamListTop from "./components/TeamListTop";
import TeamListsWrapper from "./components/TeamListsWrapper";

function TeamList() {
  return (
    <section className="team-list">
      <div className="py-12">
        <Container>
          <div className="team-list-wrapper border shadow-md rounded-md">
            <TeamListTop />

            <TeamListsWrapper />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default TeamList;

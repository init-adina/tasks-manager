import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import ProgressInfoWrapper from "./components/ProgressInfoWrapper";

function ProgressSection() {
  return (
    <section className="progress-section">
      <Container>
        <div className="py-8 flex flex-col gap-4">
          <Headline>My progress</Headline>

          <ProgressInfoWrapper />
        </div>
      </Container>
    </section>
  );
}

export default ProgressSection;

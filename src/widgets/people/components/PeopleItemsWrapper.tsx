import Container from "@shared/ui/Container";
import PersonCard from "./PersonCard";
import Button from "@shared/ui/Button";

const people = [
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
  {
    imageUrl: "/assets/img/people/me.jpg",
    name: "Adina Meiramkhanova",
    email: "marhthomson@gmail.com",
    position: "junior frontend developer",
  },
];

function PeopleItemsWrapper() {
  return (
    <section className="people-items-wrapper">
      <Container>
        <div className="pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <PersonCard
              key={index}
              {...person}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            theme="secondary"
            size="lg"
          >
            See All
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default PeopleItemsWrapper;

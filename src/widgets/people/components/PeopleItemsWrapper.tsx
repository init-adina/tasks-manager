"use client";

import Container from "@shared/ui/Container";
import Button from "@shared/ui/Button";
import { useTeams } from "src/core/providers/teams/TeamsClientProvider";

// const people = [
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
//   {
//     imageUrl: "/assets/img/people/me.jpg",
//     name: "Adina Meiramkhanova",
//     email: "marhthomson@gmail.com",
//     position: "junior frontend developer",
//   },
// ];

function PeopleItemsWrapper() {
  const { data: teams } = useTeams();

  return (
    <section className="people-items-wrapper">
      <Container>
        <div className="pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teams.map((team) => (
            <div
              className="team-item text-sm border rounded-md shadow-md flex flex-col justify-between"
              key={team.id}
            >
              <div className="person-infos px-6 pt-6 pb-3 flex flex-col items-center gap-3">
                <div className="person-image size-40 bg-slate-200"></div>

                <div className="person-name font-medium"> {team.name}</div>

                <div className="person-email">{team.email}</div>

                <div className="project-amount flex items-center gap-4">
                  <span>Projects: </span>

                  <span>{team.projects.length}</span>
                </div>
              </div>

              <div className=" bg-primary-50 px-6 py-3 text-center text-gray-800 uppercase text-xs font-semibold">
                {team.position.name}
              </div>
            </div>
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

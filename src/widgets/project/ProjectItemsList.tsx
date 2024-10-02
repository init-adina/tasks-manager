import ProjectItem from "./ProjectItem";

export interface IProjectItem {
  title: string;
  project: string;
  progress: number;
  createdDay: string;
  leftTime: string;
  team: { personImage: string; anotherPersonImage: string }[];
}

const projectItems: IProjectItem[] = [
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 80,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Cakes App",
    project: "Mobile app",
    progress: 45,
    createdDay: "September 20, 2024",
    leftTime: "8 weeks",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
  {
    title: "Kerbez App",
    project: "Web App",
    progress: 20,
    createdDay: "July 2, 2024",
    leftTime: "2 days",
    team: [
      {
        personImage: "/assets/img/people/person1.webp",
        anotherPersonImage: "/assets/img/people/me.jpg",
      },
    ],
  },
];

const colorSchemes = [
  { bgColor: "bg-red-500", textColor: "text-white" },
  { bgColor: "bg-blue-500", textColor: "text-white" },
  { bgColor: "bg-green-500", textColor: "text-white" },
  { bgColor: "bg-yellow-400", textColor: "text-black" },
];

function ProjectItemsList() {
  return (
    <div className="project-items-list grid grid-cols-4 gap-8 xl:py-20 py-12">
      {projectItems.map((projectItem, index) => (
        <ProjectItem
          key={index}
          {...projectItem}
        />
      ))}
    </div>
  );
}

export default ProjectItemsList;

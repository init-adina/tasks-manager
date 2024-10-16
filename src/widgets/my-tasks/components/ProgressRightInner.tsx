import SwiperNext from "@shared/libs/swiper/SwiperNext";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
  {
    title: "Kerbez App",
    imageUrl: "/assets/img/projects/projectone.png",
  },
];

function ProgressRightInner() {
  return (
    <div className="right-inner-info overflow-hidden">
      <SwiperNext
        spaceBetween={20}
        perView="auto"
        slides={projects.map((project) => (
          <div className="swiper-slide shrink-0">
            <ProjectCard {...project} />
          </div>
        ))}
      />
    </div>
  );
}

export default ProgressRightInner;

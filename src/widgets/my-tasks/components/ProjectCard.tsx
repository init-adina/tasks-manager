import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
}

function ProjectCard({ title, imageUrl }: ProjectCardProps) {
  return (
    <div className="project-card border w-64 rounded-3xl h-64 p-4">
      <div className="card-image w-full">
        <ProgressiveImage
          src={imageUrl}
          alt="card-image"
          width={192}
          height={192}
          className="object-cover size-full  rounded-2xl"
        />
      </div>

      <div className="card-title flex justify-center text-white">{title}</div>
    </div>
  );
}

export default ProjectCard;

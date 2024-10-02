import { LinearProgress } from "@mui/material";
import { IProjectItem } from "./ProjectItemsList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import AddIcon from "@mui/icons-material/Add";

function ProjectItem({
  title,
  project,
  progress,
  createdDay,
  leftTime,
  team,
}: IProjectItem) {
  return (
    <div className="project-item p-6 shadow-xl border flex flex-col gap-6 rounded-3xl h-80 odd:bg-primary-100">
      <div className="time flex justify-between">
        <div className="created-day text-sm font-medium">{createdDay}</div>
        <MoreVertIcon className="size-6 cursor-pointer" />
      </div>

      <div className="title-type flex flex-col items-center gap-2">
        <div className="title text-lg font-bold"> {title}</div>
        <div className="project-type flex justify-center">{project}</div>
      </div>

      <div className="progress-bar w-full flex flex-col gap-2">
        <div className="font-bold">Progress</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="h-2 rounded-md"
        />
        <div className="progress flex justify-end font-bold">{progress} %</div>
      </div>

      <div className="team-lefttime flex items-center justify-between">
        {team.map((teamPerson, index) => (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div
                key={index}
                className="person-one size-10"
              >
                <ProgressiveImage
                  src={teamPerson.personImage}
                  alt="person"
                  className="rounded-full size-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div
                key={index}
                className="person-two size-10"
              >
                <ProgressiveImage
                  src={teamPerson.anotherPersonImage}
                  alt="person"
                  className="rounded-full size-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="other-people cursor-pointer flex justify-center items-center border size-10 rounded-full">
              <AddIcon className="size-6" />
            </div>
          </div>
        ))}

        <div className="left-time bg-white text-sm font-medium rounded-3xl border px-6 py-2 text-nowrap">
          {leftTime} left
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

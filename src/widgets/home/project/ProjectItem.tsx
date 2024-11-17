import { LinearProgress } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TasksItem } from "src/entities/tasks/tasks";

function ProjectItem({
  createdDay,
  name,
  appType,
  progress,
  leftDay,
}: TasksItem) {
  return (
    <div className="project-item p-6 shadow-md text-sm border flex flex-col gap-2 rounded-md bg-white even:bg-primary-300 even:text-white">
      <div className="time flex items-center justify-between">
        <div className="created-day font-medium">{createdDay}</div>
        <MoreVertIcon className="size-6 cursor-pointer" />
      </div>

      <div className="title-type flex flex-col items-center gap-2">
        <div className="title text-lg font-bold"> {name}</div>
        <div className="project-type flex justify-center">{appType}</div>
      </div>

      <div className="progress-bar w-full flex flex-col gap-2">
        <div className="progress flex items-center justify-between">
          <div className="font-medium">Progress</div>

          <span>{progress} %</span>
        </div>

        <LinearProgress
          variant="determinate"
          value={progress}
          className="h-2 rounded-md"
        />
      </div>

      <div className="left-day flex justify-end pt-4">
        <div className="w-fit py-2 font-medium shadow rounded-full px-4 border">
          <span>Days left: </span>

          <span>{leftDay}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

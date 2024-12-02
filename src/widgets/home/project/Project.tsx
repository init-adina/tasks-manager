import { LinearProgress } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ProjectItem } from "src/entities/projects/projects";

function Project({
  start_date,
  name,
  progress,
  deadline,
  status,
  tasks,
  users,
}: ProjectItem) {
  return (
    <div className="project-item p-6 shadow-md text-sm border flex flex-col gap-2 rounded-md">
      <div className="time flex items-center justify-between">
        <div className="created-day font-medium">{start_date}</div>
        <MoreVertIcon className="size-6 cursor-pointer" />
      </div>
      <div className="title-type flex flex-col items-center gap-2">
        <div className="title text-lg font-bold"> {name}</div>
      </div>
      <div className="progress-bar w-full flex flex-col gap-2">
        <div className="progress flex items-center justify-between">
          <span className="font-medium">Progress</span>

          <span>{progress} %</span>
        </div>

        <LinearProgress
          variant="determinate"
          value={progress}
          className="rounded-md"
        />
      </div>
      <div className="status flex items-center justify-between">
        <span className="font-medium">Status</span>

        <span>{status}</span>
      </div>
      <div className="tasks flex items-center justify-between">
        <span className="font-medium">Tasks</span>

        <span>{tasks?.length || 0}</span>
      </div>
      <div className="users flex items-center justify-between">
        <span className="font-medium">Users</span>

        <span>{users?.length || 0}</span>
      </div>

      <div className="left-day flex justify-end">
        <div className="w-fit py-2 font-medium shadow-md rounded-full px-4 border">
          <span>{deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default Project;

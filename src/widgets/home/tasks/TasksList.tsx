import { ITaskItem } from "@shared/types/ITaskItem";
import TaskItem from "./TaskItem";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";

export const taskItems: ITaskItem[] = [
  {
    count: 4,
    icon: <SwipeLeftIcon className="size-5 " />,
    title: "Tasks Left",
  },
  {
    count: 12,
    icon: <DoneIcon className="size-5" />,
    title: "Done",
  },
  {
    count: 8,
    icon: <AccessTimeIcon className="size-5" />,
    title: "In Progress",
  },
  {
    count: 2,
    icon: <ContentCopyIcon className="size-5" />,
    title: "In Queue",
  },
];

function TasksList() {
  return (
    <section className="tasks-list">
      <Container>
        <div className="wrapper pt-8 flex flex-col gap-8">
          <Headline>Projects</Headline>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {taskItems.map((taskItem, index) => (
              <TaskItem
                key={index}
                {...taskItem}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TasksList;

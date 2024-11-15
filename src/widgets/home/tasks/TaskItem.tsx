import { ITaskItem } from "@shared/types/ITaskItem";

function TaskItem({ count, title }: ITaskItem) {
  return (
    <div className="task-item bg-white odd:bg-primary-300/85 odd:text-white font-medium first:text-white shadow first:shadow-xl rounded-md p-4 border flex items-center gap-4">
      <div className="count text-3xl ">{count}</div>

      <div className="title ">{title}</div>
    </div>
  );
}

export default TaskItem;

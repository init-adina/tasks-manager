import { ITaskItem } from "@shared/types/ITaskItem";

function TaskItem({ count, icon, title }: ITaskItem) {
  return (
    <div className="task-item cursor-pointer first:bg-primary-400 font-medium first:text-white shadow first:shadow-xl rounded-lg p-4 border flex items-center gap-4">
      <div className="count text-3xl ">{count}</div>

      <div className="title ">{title}</div>
    </div>
  );
}

export default TaskItem;

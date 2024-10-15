import { ITaskItem } from "@shared/types/ITaskItem";

function TaskItem({ count, icon, title }: ITaskItem) {
  return (
    <div className="task-item cursor-pointer bg-white first:bg-primary-500/85 font-medium first:text-white shadow first:shadow-xl rounded-md p-4 border flex items-center gap-4">
      <div className="count text-3xl ">{count}</div>

      <div className="title ">{title}</div>
    </div>
  );
}

export default TaskItem;

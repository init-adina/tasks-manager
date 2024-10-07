import { ITaskItem } from "@shared/types/ITaskItem";

function TaskItem({ count, icon, title }: ITaskItem) {
  return (
    <div className="task-item cursor-pointer first:bg-primary-200 rounded-lg p-4 border  flex flex-col gap-4">
      <div className="size-10 rounded-full border  bg-white flex items-center justify-center">
        {icon}
      </div>

      <div className="title text-gray-600">{title}</div>

      <div className="count text-3xl font-medium">{count}</div>
    </div>
  );
}

export default TaskItem;

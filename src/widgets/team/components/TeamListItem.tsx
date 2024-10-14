import { ITeamItem } from "@shared/types/ITeamItem";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

function TeamListItem({
  taskTitle,
  personInfo,
  status,
  priority,
  lastUpdate,
}: ITeamItem) {
  return (
    <div className="team-list-item grid grid-cols-7 text-sm">
      <div className="person-info col-span-2 px-4 py-2 border-b border-r">
        {personInfo.map((info, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            <div className="image size-10 shrink-0">
              <ProgressiveImage
                src={info.imageUrl}
                width={500}
                className="size-full object-cover rounded-full"
                height={500}
                alt="person-image"
              />
            </div>

            <div className="name text-nowrap">{info.name}</div>
          </div>
        ))}
      </div>

      <div className="title col-span-2 px-4 py-2 flex items-center border-b border-r">
        {taskTitle}
      </div>

      <div className="status col-span-1 px-4 py-2 flex items-center border-b border-r">
        {status}
      </div>

      <div className="priority col-span-1 px-4 py-2 flex items-center border-b border-r">
        {priority}
      </div>

      <div className="last-update col-span-1 px-4 py-2 flex items-center border-b border-r">
        {lastUpdate}
      </div>
    </div>
  );
}

export default TeamListItem;

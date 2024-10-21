import { ITeamItem } from "@shared/types/ITeamItem";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

function TeamItem({
  taskTitle,
  personInfo,
  status,
  priority,
  lastUpdate,
}: ITeamItem) {
  return (
    <div className="team-item border p-6 flex gap-4">
      <div className="image size-16 shrink-0">
        {personInfo.map((personInfo, index) => (
          <ProgressiveImage
            key={index}
            src={personInfo.imageUrl}
            width={500}
            height={500}
            className="rounded-full size-full object-cover"
            alt={personInfo.name}
          />
        ))}
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between ">
          <div>{taskTitle}</div>
          <div>{status}</div>
        </div>

        <div className="flex justify-between">
          <div>{priority}</div>

          <div>{lastUpdate}</div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;

import { IWorkItem } from "@shared/types/IWorkItem";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";
import { cn } from "@shared/utils/cn";

function CurvedSwiperCard({ siteType, image, company, bgColor }: IWorkItem) {
  return (
    <div
      className={cn(
        "relative group overflow-hidden w-full items-center p-10 border gap-10 flex flex-col h-[23rem]",
        bgColor
      )}
    >
      <Headline size="sm">{siteType}</Headline>

      <ProgressiveImage
        src={image ?? "/assets/no-image.png"}
        alt="slide-image"
        width={800}
        height={1000}
        className="h-full"
      />

      <div className="border-b-2 flex pb-2 mt-auto flex-col text-center">
        <span className=" text-gray-500 small-text truncate">{company}</span>
      </div>
    </div>
  );
}

export default CurvedSwiperCard;

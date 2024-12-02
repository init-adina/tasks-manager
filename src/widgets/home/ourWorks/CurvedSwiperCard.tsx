import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";
import { cn } from "@shared/utils/cn";

interface ICurvedSwiperSingleCard {
  title: string;
  siteType: string;
  srcUrl: string;
  bgColor: string;
  info: string;
}

function CurvedSwiperCard({
  title,

  siteType,
  srcUrl,
  bgColor,
}: ICurvedSwiperSingleCard) {
  return (
    <div
      className={cn(
        "relative group overflow-hidden w-full items-center p-10 border shadow-xl gap-10 flex flex-col h-[25rem] ",
        bgColor
      )}
    >
      <Headline size="sm">{title}</Headline>

      <ProgressiveImage
        src={srcUrl}
        alt="slide-image"
        width={800}
        height={1000}
        className="h-full"
      />

      <div className="border-b-2 flex pb-2 mt-auto flex-col text-center">
        <span className=" text-gray-500 small-text">{siteType}</span>
      </div>
    </div>
  );
}

export default CurvedSwiperCard;

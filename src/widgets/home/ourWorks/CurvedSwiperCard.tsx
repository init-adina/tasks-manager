import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";
import { cn } from "@shared/utils/cn";

interface ICurvedSwiperSingleCard {
  title: string;
  companyName: string;
  siteType: string;
  srcUrl: string;
  bgColor: string;
  info: string;
}

function CurvedSwiperCard({
  title,
  companyName,
  siteType,
  srcUrl,
  bgColor,
}: ICurvedSwiperSingleCard) {
  return (
    <div
      className={cn(
        "relative group overflow-hidden w-full p-10 border flex flex-col h-[32rem]",
        bgColor
      )}
    >
      <div className="opacity-0 group-hover:opacity-100 duration-700 absolute top-5 right-5">
        &#8599;
      </div>
      {/* <div className="absolute top-60 opacity-0 group-hover:top-20 group-hover:opacity-100 transition-all duration-500 -right-6 h-[200%] w-[200%] bg-white rounded-full"></div>
        <div className="absolute left-0 -bottom-10 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 delay-100 p-10">
          <p className="text-pretty font-light">{info}</p>
        </div> */}

      <p className="flex self-center text-gray-400 small-text pb-16">{title}</p>
      <ProgressiveImage
        src={srcUrl}
        alt="slide-image"
        width={700}
        height={700}
        className="w-full"
      />
      <div className="border-b-2 border-black flex flex-col mt-auto">
        <Headline size="sm">{companyName}</Headline>

        <span className="py-3 xl:py-6 text-gray-400 small-text">
          {siteType}
        </span>
      </div>
    </div>
  );
}

export default CurvedSwiperCard;

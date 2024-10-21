import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import ProgressLeftInner from "./ProgressLeftInner";

function ProgressInfoWrapper() {
  return (
    <div className="bg-primary-500/80 relative p-6 flex gap-12 rounded-2xl">
      <div className="lg:w-1/3">
        <ProgressLeftInner />

        <div className="absolute bg-image top-0 right-0 w-96 h-full">
          <ProgressiveImage
            src="/assets/img/bg.webp"
            alt="bg-image"
            priority
            width={800}
            height={800}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressInfoWrapper;

import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

function PortfolioSidebar() {
  return (
    <div className="portfolio-sidebar border h-[22rem] p-6 flex flex-col items-center gap-4 rounded-md shadow-md">
      <div className="image size-32">
        <ProgressiveImage
          src="/assets/img/people/me.jpg"
          alt="user-image"
          width={500}
          height={500}
          className="size-full rounded-full object-cover"
        />
      </div>

      <div className="user-name font-medium text-lg">Adina Meiramkhanova</div>

      <div className="user-email text-gray-600 text-sm">
        adina.meiramkahnova@gmail.com
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col items-center border-r font-medium">
          <div className="text-lg">15</div>
          <div className="text-sm text-gray-600">Projects</div>
        </div>

        <div className="flex flex-col items-center font-medium">
          <div className="text-lg">2</div>
          <div className="text-sm text-gray-600">Upcoming</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSidebar;

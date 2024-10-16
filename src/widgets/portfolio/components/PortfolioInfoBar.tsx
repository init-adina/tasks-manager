function PortfolioInfoBar() {
  return (
    <div className="portfolio-info-bar border shadow-md rounded-md h-[22rem] p-6 flex flex-col gap-12">
      <div className="top grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Gender</div>
          <div>Female</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Birthday</div>
          <div>January 15, 2004</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Phone Number</div>
          <div>7 (777) 777 77 77</div>
        </div>
      </div>

      <div className="middle grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Street Address</div>
          <div>address place</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">City</div>
          <div>Almaty</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Phone Number</div>
          <div>7 (777) 777 77 77</div>
        </div>
      </div>

      <div className="bottom grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Member Status</div>
          <div>Active</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Registered Date</div>
          <div>June 16, 2024</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioInfoBar;

import { useAuth } from "src/core/providers/AuthProvider";

function PortfolioInfoBar() {
  const { user, loading: isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not authorized</div>;

  return (
    <div className="portfolio-info-bar border shadow-md rounded-md lg:h-[22rem] p-6 flex flex-col gap-12">
      <div className="top grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="gender flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Gender</div>
          <div>{user.gender}</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Birthday</div>
          <div>{user.birth_date_at || "not defined"}</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Phone Number</div>
          <div>{user.phone || "not defined"}</div>
        </div>
      </div>

      <div className="middle grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Street Address</div>
          <div>{user.address || "not defined"}</div>
        </div>

        <div className="role flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Role</div>
          <div>{user.position.name}</div>
        </div>

        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Registered Date</div>
          <div>June 16, 2024</div>
        </div>
      </div>

      <div className="bottom grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm pb-2 border-b">
          <div className="category text-gray-600">Member Status</div>
          <div>Active</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioInfoBar;

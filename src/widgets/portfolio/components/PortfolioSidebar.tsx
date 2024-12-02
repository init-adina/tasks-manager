import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import { useAuth } from "src/core/providers/AuthProvider";

function PortfolioSidebar() {
  const { user, loading: isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not authorized</div>;

  return (
    <div className="portfolio-sidebar border h-[22rem] p-6 flex flex-col items-center gap-4 rounded-md shadow-md">
      <div className="image size-32">
        <ProgressiveImage
          src={user.avatar || "/assets/no-avatar.webp"}
          alt="user-image"
          width={500}
          height={500}
          className="size-full rounded-full object-cover"
        />
      </div>

      <div className="user-name font-medium text-lg">{user.name}</div>

      <div className="user-email text-gray-600 text-sm">{user.email}</div>

      <div className="project sum flex flex-col items-center font-medium">
        <div className="text-lg">{user.projects_count}</div>
        <div className="text-sm text-gray-600">Projects</div>
      </div>
    </div>
  );
}

export default PortfolioSidebar;

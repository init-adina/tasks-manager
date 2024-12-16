"use client";

import Container from "@shared/ui/Container";
import { useAuth } from "src/core/providers/auth/AuthProvider";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

function PortfolioTop() {
  const { user } = useAuth();

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <section className="portfolio-top">
      <Container>
        <div className="py-12 grid grid-cols-1  md:grid-cols-5 xl:grid-cols-4 gap-4 ">
          <div className="md:col-span-2 xl:col-span-1">
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

              <div className="user-email text-gray-600 text-sm">
                {user.email}
              </div>

              <div className="project sum flex flex-col items-center font-medium">
                <div className="text-lg">{user.projects_count}</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 xl:col-span-3">
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
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PortfolioTop;

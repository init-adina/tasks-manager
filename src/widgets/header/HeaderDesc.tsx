import Container from "@shared/ui/Container";
import Input from "@shared/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";

function HeaderDesc() {
  return (
    <div className="header-desc border-b ">
      <Container>
        <div className="flex justify-between items-center py-4 gap-4">
          <Link
            href="/"
            className="logo text-primary-400 flex flex-col items-center gap-1 animate-pulse"
          >
            <FlutterDashIcon sx={{ width: "40px", height: "40px" }} />

            <span className="text-xs font-medium uppercase">The Logo</span>
          </Link>

          <div className="search flex border-2 w-[32rem] rounded-lg bg-white items-center">
            <Input
              className="border-none bg-transparent w-full rounded py-3 px-4"
              placeholder="Search here"
            />
            <div className="search-icon py-3 group px-4 cursor-pointer flex items-center justify-center h-full">
              <SearchIcon className="h-full group-hover:text-primary-400 size-6" />
            </div>
          </div>

          <nav className="nav">
            <ul className="flex items-center gap-8 justify-between text-nowrap">
              <li>
                <Link href="/team">Team</Link>
              </li>

              <li>
                <Link href="/people">Blog</Link>
              </li>

              <li>
                <Link href="">All Projects</Link>
              </li>

              <li>
                <Link href="/my-tasks">My Tasks</Link>
              </li>

              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>

          <div className="btns flex items-center gap-4">
            {/* <div className="notification relative size-10 shadow-md rounded-full border flex items-center justify-center">
              <NotificationsActiveOutlinedIcon
                className="cursor-pointer hover:text-primary-300"
                sx={{ width: "20px", height: "20px" }}
              />

              <div className="absolute size-5 flex items-center justify-center border bg-red-500 text-white rounded-full -top-1 -right-2">
                <PriorityHighIcon sx={{ width: "12px", height: "12px" }} />
              </div>
            </div> */}

            <div className="logout cursor-pointer w-fit border flex items-center gap-2 rounded-lg py-2 px-4">
              {/* <div className="profile-img size-10 shrink-0">
                <ProgressiveImage
                  src="/assets/img/people/me.jpg"
                  alt="profile-image"
                  className="size-full object-cover rounded-full shrink-0"
                  width={100}
                  height={100}
                />
              </div> */}

              {/* <div className="hidden lg:block text-xs text-nowrap font-semibold">
                Adina Meiramkhanova
              </div> */}
              <div>User Name</div>

              <LogoutIcon sx={{ width: "20px", height: "20px" }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderDesc;

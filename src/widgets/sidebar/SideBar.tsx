import Headline from "@shared/ui/Headline";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

function SideBar() {
  return (
    <aside className="sidebar hidden lg:flex">
      <div className="flex flex-col gap-12 fixed bottom-0 top-0 z-10 px-4 left-0 w-60 pt-6 border-r shadow-md text-white bg-primary-500/80">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 "
          >
            <BubbleChartOutlinedIcon className="size-8" />
            <Headline className="font-bold">PTrack</Headline>
          </Link>

          <ViewSidebarOutlinedIcon className="size-6 " />
        </div>

        <div className="main-menu flex flex-col gap-6 text-sm font-medium">
          <div className="menu-title uppercase ">main menu</div>
          <div className="pl-4 flex flex-col gap-6">
            <Link
              href="/"
              className="menu-item flex hover:text-primary-100 cursor-pointer w-fit items-center gap-2"
            >
              <HomeIcon className="size-6" />
              <div>Home</div>
            </Link>

            <div className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <TaskIcon className="size-6" />
              <div>All Tasks</div>
            </div>

            <Link
              href="/team"
              className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit"
            >
              <GroupIcon className="size-6" />
              <div>Team</div>
            </Link>

            <Link
              href="/people"
              className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit"
            >
              <GroupIcon className="size-6" />
              <div>People</div>
            </Link>

            <Link
              href="my-tasks"
              className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit"
            >
              <ListAltIcon className="size-6" />
              <div>My Tasks</div>
            </Link>
          </div>
        </div>

        <div className="setting flex flex-col gap-6 text-sm font-medium">
          <div className="setting-title uppercase">Setting</div>

          <div className="pl-4 flex flex-col gap-6">
            <Link
              href="/portfolio"
              className="setting-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit"
            >
              <AccountCircleIcon className="size-6" />
              <div className="title">Portfolio</div>
            </Link>

            <div className="setting-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <SettingsIcon className="size-6" />
              <div className="title">Setting</div>
            </div>

            <div className="setting-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <LogoutIcon className="size-6" />
              <div className="title">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

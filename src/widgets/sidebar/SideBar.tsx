import Headline from "@shared/ui/Headline";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="flex flex-col gap-12 fixed top-0 z-10 px-4 left-0 w-56 h-screen bg-primary-400 pt-6 text-white">
        <Link href="/">
          <Headline className="font-bold">Company</Headline>
        </Link>

        <div className="main-menu flex flex-col gap-6 text-sm font-medium">
          <div className="menu-title uppercase ">main menu</div>
          <div className="pl-4 flex flex-col gap-6">
            <div className="menu-item flex hover:text-primary-100 cursor-pointer w-fit items-center gap-2">
              <HomeIcon className="size-6" />
              <div>Home</div>
            </div>

            <div className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <TaskIcon className="size-6" />
              <div>All Tasks</div>
            </div>

            <div className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <GroupIcon className="size-6" />
              <div>Team</div>
            </div>

            <div className="menu-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <ListAltIcon className="size-6" />
              <div>My Tasks</div>
            </div>
          </div>
        </div>

        <div className="setting flex flex-col gap-6 text-sm font-medium">
          <div className="setting-title uppercase">Setting</div>

          <div className="pl-4 flex flex-col gap-6">
            <div className="setting-item flex items-center gap-2 hover:text-primary-100 cursor-pointer w-fit">
              <AccountCircleIcon className="size-6" />
              <div className="title">Portfolio</div>
            </div>

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

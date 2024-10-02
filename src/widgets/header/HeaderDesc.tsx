import Container from "@shared/ui/Container";
import FitbitIcon from "@mui/icons-material/Fitbit";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function HeaderDesc() {
  return (
    <div className="header-desc hidden lg:block border-b">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-28">
            <div className="logo text-primary-300">
              <FitbitIcon className="size-10" />
            </div>

            <nav>
              <ul className="flex gap-8 items-center">
                <li className="cursor-pointer hover:text-primary-400">
                  All Tasks
                </li>
                <li className="cursor-pointer hover:text-primary-400">Team</li>
                <li className="cursor-pointer hover:text-primary-400">
                  Company
                </li>
                <li className="cursor-pointer hover:text-primary-400">
                  My Tasks
                </li>
              </ul>
            </nav>
          </div>

          <div className="btns flex items-center gap-8">
            <div className="gap-4 flex items-center">
              <SettingsIcon className="size-5 cursor-pointer hover:text-primary-400" />
              <NotificationsActiveOutlinedIcon className="size-5 cursor-pointer hover:text-primary-400" />
            </div>

            <div className="profile size-10 cursor-pointer flex gap-1 items-center">
              <ProgressiveImage
                src="/assets/img/people/me.jpg"
                alt="profile-image"
                className="size-full object-cover rounded-full shrink-0"
                width={100}
                height={100}
              />
              <KeyboardArrowDownOutlinedIcon className="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderDesc;

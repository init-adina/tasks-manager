import Container from "@shared/ui/Container";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Input from "@shared/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function HeaderDesc() {
  return (
    <div className="header-desc shadow-md  border-b">
      <Container>
        <div className="flex justify-between items-center py-4 gap-4">
          <div className="search flex border-2 w-[30rem] rounded-lg bg-white items-center">
            <Input
              className="border-none bg-transparent w-full rounded py-3 px-4"
              placeholder="Search here"
            />
            <div className="search-icon py-3 group px-4 cursor-pointer flex items-center justify-center h-full">
              <SearchIcon className="h-full group-hover:text-primary-400 size-6" />
            </div>
          </div>

          <div className="btns flex items-center gap-4">
            <div className="notification relative size-10 shadow-md rounded-full border flex items-center justify-center">
              <NotificationsActiveOutlinedIcon className="size-5 cursor-pointer hover:text-primary-300" />

              <div className="absolute size-5 flex items-center justify-center border bg-red-500 text-white rounded-full -top-1 -right-2">
                <PriorityHighIcon className="size-3" />
              </div>
            </div>

            <div className="profile cursor-pointer w-fit border flex items-center gap-2 rounded-3xl px-2 py-1">
              <div className="profile-img size-10 shrink-0">
                <ProgressiveImage
                  src="/assets/img/people/me.jpg"
                  alt="profile-image"
                  className="size-full object-cover rounded-full shrink-0"
                  width={100}
                  height={100}
                />
              </div>

              <div className="hidden lg:flex flex-col text-xs">
                <div className="text-nowrap font-semibold">
                  Adina Meiramkhanova
                </div>
                <div className="text-gray-600">@adinamei</div>
              </div>

              <ExpandMoreOutlinedIcon className="size-6 text-gray-600" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderDesc;

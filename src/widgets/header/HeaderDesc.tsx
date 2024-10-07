import Container from "@shared/ui/Container";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Input from "@shared/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";

function HeaderDesc() {
  return (
    <div className="header-desc shadow-md hidden lg:block border-b">
      <Container>
        <div className="flex justify-between items-center py-4">
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
            <NotificationsActiveOutlinedIcon className="size-5 cursor-pointer hover:text-primary-300" />

            <div className="profile size-10 cursor-pointer shrink-0">
              <ProgressiveImage
                src="/assets/img/people/me.jpg"
                alt="profile-image"
                className="size-full object-cover rounded-full shrink-0"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderDesc;

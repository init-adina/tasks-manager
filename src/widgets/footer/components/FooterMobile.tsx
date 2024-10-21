import Container from "@shared/ui/Container";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Link from "next/link";

function FooterMobile() {
  return (
    <div className="fixed left-0 bottom-0 bg-white w-full shadow-2xl border right-0 lg:hidden z-50 py-4">
      <Container className="max-w-[480px]">
        <nav className="flex h-16 items-center justify-between ">
          <Link
            href="/"
            className="flex flex-col gap-2 items-center"
          >
            <HomeIcon className="size-6" />
            <div>Home</div>
          </Link>
          <Link
            href="/team"
            className="flex flex-col gap-2 items-center"
          >
            <GroupIcon className="size-6" />
            <div>Team</div>
          </Link>
          <Link
            href="/people"
            className="flex flex-col gap-2 items-center"
          >
            <GroupIcon className="size-6" />
            <div>People</div>
          </Link>
          <Link
            href="/my-tasks"
            className="flex flex-col gap-2 items-center"
          >
            <ListAltIcon className="size-6" />
            <div>My Tasks</div>
          </Link>
        </nav>
      </Container>
    </div>
  );
}

export default FooterMobile;

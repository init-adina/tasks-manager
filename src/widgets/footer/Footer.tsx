import Container from "@shared/ui/Container";
import Navbar from "@widgets/header/Navbar";
import FitbitIcon from "@mui/icons-material/Fitbit";
import Link from "next/link";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex justify-between items-center py-8 border-t">
          <Link href="/">
            <div className="logo text-primary-200">
              <FitbitIcon className="size-10" />
            </div>
          </Link>
          <Navbar />

          <div className="text flex items-center gap-1">
            <CopyrightIcon />
            <div>All right reserved</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

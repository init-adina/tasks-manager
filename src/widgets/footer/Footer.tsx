"use client";

import { useAuth } from "src/core/providers/auth/AuthProvider";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Link from "next/link";
import Container from "@shared/ui/Container";

function Footer() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <footer className="py-3 border-t">
      <Container>
        <div className="wrapper flex justify-between items-center">
          <Link
            href="/"
            className="logo text-primary-400 flex flex-col items-center gap-1"
          >
            <LogoDevIcon sx={{ width: "40px", height: "40px" }} />

            <span className="text-xs font-medium uppercase">The Logo</span>
          </Link>

          <nav className="nav ">
            <ul className="flex items-center gap-12 justify-between text-gray-500">
              <li className="hover:text-primary-300">
                <Link href="/teams">Teams</Link>
              </li>

              <li className="hover:text-primary-300">
                <Link href="/projects">Projects</Link>
              </li>

              <li className="hover:text-primary-300">
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>

          <div className="policy hover:text-primary-300 text-gray-500">
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

"use client";

import Container from "@shared/ui/Container";
import Input from "@shared/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useAuth } from "src/core/providers/AuthProvider";
import { authService } from "src/entities/auth/auth.service";
import { useRouter } from "next/navigation";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function HeaderDesc() {
  const { user, refetchUser } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authService.logout();

      refetchUser(); // Обновить пользователя в контексте
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <div className="header-desc border-b relative z-50 h-24 flex items-center">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="logo text-primary-400 flex flex-col items-center gap-1"
          >
            <LogoDevIcon sx={{ width: "40px", height: "40px" }} />

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
              <li className="hover:text-primary-400">
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

          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-primary-400"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="hover:text-primary-400"
            >
              Login
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}

export default HeaderDesc;

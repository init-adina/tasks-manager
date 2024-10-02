import { links } from "@shared/data/Links";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8 items-center text-nowrap">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
          >
            <li className="cursor-pointer hover:text-primary-300">
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8 items-center text-nowrap">
        <li className="cursor-pointer hover:text-primary-400">All Tasks</li>
        <li className="cursor-pointer hover:text-primary-400">Team</li>
        <li className="cursor-pointer hover:text-primary-400">Company</li>
        <li className="cursor-pointer hover:text-primary-400">My Tasks</li>
      </ul>
    </nav>
  );
}

export default Navbar;

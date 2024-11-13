const links = [
  {
    name: "My Dashboard",
  },
  {
    name: "My Orders",
  },
  {
    name: "Account Details",
  },
  {
    name: "Log Out",
  },
];

function Teamplate() {
  return (
    <>
      <div className=" relative group border w-fit">
        <div className="bg-purple-400 h-20 w-36 flex items-center justify-center text-white">
          Div
        </div>

        <div className="absolute top-full transform translate-y-4 transition-transform duration-700 flex-col hidden w-full group-hover:flex">
          {links.map((link, index) => (
            <div
              className="link border-b px-2 py-2 text-nowrap"
              key={index}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teamplate;

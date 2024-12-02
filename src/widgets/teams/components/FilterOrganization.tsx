"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useRef, useState } from "react";

function FilterOrganization() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <div
        className="px-4 py-3 cursor-pointer bg-primary-50 text-sm w-44 text-primary-500 rounded-md flex justify-between items-center font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>Position</div>
        <ArrowDropDownIcon className="size-5" />
      </div>

      {isOpen && (
        <div className="border absolute top-[110%] w-full rounded-md text-sm flex flex-col gap-3 bg-white cursor-pointer">
          <div className="border-b px-4 py-3">Designer</div>
          <div className="border-b px-4 pb-3">Developer</div>
          <div className="px-4 pb-3 ">Project Manager</div>
        </div>
      )}
    </div>
  );
}

export default FilterOrganization;

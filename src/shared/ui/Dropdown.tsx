"use client";
import { cn } from "@shared/utils/cn";
import { gsap } from "gsap";
import { ReactNode, useState, useEffect, useRef } from "react";

type position = "center" | "left" | "right" | "none";

interface DropdownContentProps {
  title: ReactNode;
  content: ReactNode;
  className?: string;
  contentClassName?: string;
  contentPosition?: position;
  duration?: number;
}

const positionClassName: Record<position, string> = {
  center: "left-1/2 -translate-x-1/2",
  left: "left-0",
  right: "right-0",
  none: "",
};

function Dropdown({
  title,
  content,
  contentClassName,
  contentPosition = "center",
  className,
  duration = 0.5,
}: DropdownContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (!isOpen) {
      gsap.to(el, {
        height: "0",
        duration,
        onComplete: () => {
          gsap.set(el, { display: "none" });
        },
      });
    } else {
      gsap.fromTo(
        el,
        {
          duration,
          height: 0,
          display: "block",
        },
        { duration, height: "auto" }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    const el = dropdownRef.current;
    if (el && el.contains(event.target as Node)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={cn("dropdown-head relative w-fit", className)}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={cn(
          "dropdown-head flex items-center cursor-pointer [&>*>*.icon]:transition-all",
          isOpen ? "[&>*>*.icon]:scale-y-100" : "[&>*>*.icon]:-scale-y-100"
        )}
      >
        {title}
      </div>

      <div
        ref={contentRef}
        className={cn(
          "dropdown-content hidden absolute top-full w-max min-w-full bg-white shadow-lg border rounded-md z-20 overflow-hidden",
          positionClassName[contentPosition],
          contentClassName
        )}
      >
        {content}
      </div>
    </div>
  );
}

export default Dropdown;

"use client";
import { cn } from "@shared/utils/cn";
import gsap from "gsap";
import { ReactNode, useEffect, useRef, useState } from "react";

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

function Accordion({
  title,
  content,
  contentClassName,
  contentPosition = "center",
  className,
  duration = 0.5,
}: DropdownContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const tl = gsap.timeline({});

    if (!isOpen) {
      tl.to(el, {
        height: 0,
        duration,
        onComplete: () => {
          gsap.set(el, { visibility: "hidden" });
        },
      });
    } else {
      tl.fromTo(
        el,
        { duration, height: 0, visibility: "visible" },
        { duration, height: "auto" }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn("dropdown-head relative w-fit", className)}
    >
      <div
        className={cn(
          "dropdown-head flex items-center cursor-pointer [&>*>*.icon]:transition-all",
          isOpen ? "[&>*>*.icon]:scale-y-100" : "[&>*>*.icon]:-scale-y-100"
        )}
      >
        {title}
      </div>

      <div
        ref={contentRef}
        style={{ visibility: "hidden" }}
        className={cn(
          "dropdown-content absolute top-full w-max -mt-1 min-w-full bg-white shadow-lg border rounded-md z-20 overflow-hidden",
          positionClassName[contentPosition],
          contentClassName
        )}
      >
        {content}
      </div>
    </div>
  );
}

export default Accordion;

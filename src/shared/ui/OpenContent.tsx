"use client";

import { cn } from "@shared/utils/cn";
import { gsap } from "gsap";
import { ReactNode, useEffect, useRef, useState } from "react";

interface OpenProps {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  duration?: number;
  defaultState?: boolean;
}

function OpenContent({
  children,
  title,
  className,
  duration = 0.5,
  defaultState = false,
}: OpenProps) {
  const [isOpen, setIsOpen] = useState(defaultState);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (!isOpen) {
      gsap.to(el, {
        height: "0",
        duration,
        onComplete: () => {
          el.classList.add("hidden");
          gsap.set(el, { clearProps: "all" });
        },
      });
    } else {
      el.classList.remove("hidden");
      gsap.fromTo(
        el,
        {
          duration,
          height: 0,
        },
        { duration, height: "auto" }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={cn("open-head relative", className)}>
      <div
        className={cn(
          "open-title transition-all [&>*>*.icon]:transition-all",
          isOpen ? "[&>*>*.icon]:scale-y-100" : "[&>*>*.icon]:-scale-y-100"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </div>
      <div
        ref={contentRef}
        className="open-content overflow-hidden hidden"
      >
        {children}
      </div>
    </div>
  );
}

export default OpenContent;

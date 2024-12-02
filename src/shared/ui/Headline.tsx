import { size } from "@shared/types/uiTypes";
import { cn } from "@shared/utils/cn";
import { ReactNode } from "react";

interface HeadlineProps {
  className?: string;
  size?: size;
  children?: ReactNode;
}

const textSizes = {
  none: "",
  sm: "text-base",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl lg:text-5xl",
};

function Headline({ className, size = "md", children }: HeadlineProps) {
  return (
    <div className={cn("headline", className, textSizes[size])}>{children}</div>
  );
}

export default Headline;

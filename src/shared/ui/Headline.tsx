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
  xs: "text-xs",
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-xl lg:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-6xl",
};

function Headline({ className, size = "md", children }: HeadlineProps) {
  return (
    <div className={cn("headline", className, textSizes[size])}>{children}</div>
  );
}

export default Headline;

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
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl lg:text-5xl",
};

function Headline({ className, size = "md", children }: HeadlineProps) {
  return (
    <div className={cn("headline font-semibold", className, textSizes[size])}>
      {children}
    </div>
  );
}

export default Headline;

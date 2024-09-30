import { cn } from "@shared/utils/cn";
import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactNode[];
}

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}
export default Container;

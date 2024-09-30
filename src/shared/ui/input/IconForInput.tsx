import { cn } from "@shared/utils/cn";
import { ReactNode } from "react";

export interface IconForInputProps {
  children?: ReactNode;
  icon: ReactNode;
  iconClassName?: string;
  htmlFor?: string;
}

const IconForInput = ({
  icon,
  iconClassName,
  children,
  htmlFor,
}: IconForInputProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("relative h-full")}
      //htmlFor={htmlFor}
      // onClick={(e) => {
      //   e.stopPropagation();
      //   e.preventDefault();
      // }}
    >
      {children}
      <div
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center",
          iconClassName
        )}
      >
        {icon}
      </div>
    </label>
  );
};

export default IconForInput;

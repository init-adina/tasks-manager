import { size, theme } from "@shared/types/uiTypes";
import { cn } from "@shared/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size;
  theme?: theme;
  className?: string;
  children?: ReactNode | ReactNode[];
}

const sizes = {
  none: "",
  md: "px-4 py-2",
  lg: "px-10 py-3",
  sm: "px-2 py-1 leading-none",
};

const themes = {
  none: "",
  primary:
    "bg-white hover:border-white border border-transparent hover:bg-transparent hover:text-white hover:fill-white",
  secondary:
    "text-white bg-primary-400 border hover:bg-white hover:border-primary-400 hover:text-primary-400",
  outlined: "border-white hover:bg-white hover:text-black border text-white",
  transparent: "bg-white/20 text-white",
};

function Button({
  size = "md",
  theme = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex transition-all duration-300 gap-2 w-fit rounded-full font-medium outline-none",
        sizes[size],
        themes[theme],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

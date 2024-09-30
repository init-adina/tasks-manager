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
  lg: "px-12 py-5 ",
  sm: "px-2 py-1 leading-none",
};

const themes = {
  none: "",
  primary:
    "bg-white hover:border-white border border-transparent hover:bg-transparent hover:text-white hover:fill-white",
  secondary:
    "bg-custom-black text-white border hover:bg-custom hover:text-custom-black border-custom-black",
  outlined:
    "bg-custom border border-custom-black hover:bg-custom-black hover:text-white",
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
        "flex transition-all gap-2 w-fit rounded-full text-custom-black outline-none",
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

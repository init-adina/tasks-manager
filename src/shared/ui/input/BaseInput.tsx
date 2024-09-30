import { size, theme } from "@shared/types/uiTypes";
import { cn } from "@shared/utils/cn";
import { forwardRef, InputHTMLAttributes } from "react";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: size;
  theme?: theme;
}

const sizes = {
  none: "",
  xs: "",
  md: "px-3 py-2 ",
  lg: "px-5 py-4 rounded-3xl",
  sm: "px-2 py-1",
};

const themes = {
  none: "outline-none",
  primary: "bg-white text-black outline-0 rounded-md",
  secondary: "bg-black text-white",
  outlined: "",
  transparent: "",
};

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ inputSize = "md", theme = "primary", className, id, ...props }, ref) => {
    return (
      <input
        id={id}
        name={id}
        ref={ref}
        className={cn(
          "flex gap-2 transition-all outline-none w-full",
          sizes[inputSize],
          themes[theme],
          className
        )}
        {...props}
      />
    );
  }
);

BaseInput.displayName = "BaseInput";

export default BaseInput;

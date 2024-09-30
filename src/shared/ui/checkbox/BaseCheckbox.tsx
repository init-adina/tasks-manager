"use client";

import { Check } from "@mui/icons-material";
import { cn } from "@shared/utils/cn";
import { InputHTMLAttributes, forwardRef, useState } from "react";

export interface BaseCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  activeName?: string;
  onCheckChange?: (value: boolean) => void;
  state?: boolean;
}

const BaseCheckbox = forwardRef<HTMLInputElement, BaseCheckboxProps>(
  (
    {
      activeName,
      className,
      id,
      state = false,
      onChange,
      onCheckChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(state);

    return (
      <label
        htmlFor={id}
        className={cn(
          "size-6 px-1 cursor-pointer grid place-items-center border rounded transition-all bg-primary-300 text-white",
          "outline outline-0 outline-primary-300/30 active:outline-4",
          isChecked ? activeName : "bg-white",
          className
        )}
      >
        <input
          type="checkbox"
          id={id}
          className="hidden"
          ref={ref}
          checked={isChecked}
          onChange={(e) => {
            setIsChecked((prev) => !prev);
            onCheckChange?.(state);
            onChange?.(e);
          }}
          {...props}
        />
        <Check
          fontSize="inherit"
          className={isChecked ? "opacity-100" : "opacity-0"}
        />
      </label>
    );
  }
);

BaseCheckbox.displayName = "BaseCheckbox";

export default BaseCheckbox;

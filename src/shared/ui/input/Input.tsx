"use client";
import { forwardRef, ReactNode, useState } from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconForInput from "./IconForInput";
import { cn } from "@shared/utils/cn";

export interface InputProps extends BaseInputProps {
  label?: string;
  icon?: ReactNode;
  iconClassName?: string;
  labelClass?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      icon,
      id,
      iconClassName,
      error,
      className,
      labelClass,
      type,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    let baseInput = (
      <BaseInput
        className={cn(className, {
          "outline outline-red-500 outline-1": error,
        })}
        ref={ref}
        id={id}
        {...props}
      />
    );

    if (type === "password") {
      baseInput = (
        <div className="relative">
          <BaseInput
            ref={ref}
            id={id}
            className={cn(className, {
              "outline outline-red-500 outline-1": error,
            })}
            autoComplete="current-password"
            {...props}
            type={isPasswordVisible ? "text" : "password"}
          />
          <div
            className="top-1/2 p-3 cursor-pointer absolute right-1 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <Visibility sx={{ width: "20px" }} />
            ) : (
              <VisibilityOff sx={{ width: "20px" }} />
            )}
          </div>
        </div>
      );
    }

    if (label || error) {
      baseInput = (
        <label
          htmlFor={id}
          className={cn("flex flex-col gap-2", labelClass)}
        >
          <div>{label}</div>
          {baseInput}
          <div className="text-red-500">{error}</div>
        </label>
      );
    }

    if (icon) {
      baseInput = (
        <IconForInput
          htmlFor={id}
          icon={icon}
          iconClassName={cn(iconClassName)}
        >
          {baseInput}
        </IconForInput>
      );
    }
    return baseInput;
  }
);

Input.displayName = "Input";

export default Input;

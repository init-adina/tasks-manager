import { forwardRef, ReactNode } from "react";
import BaseCheckbox, { BaseCheckboxProps } from "./BaseCheckbox";
import { cn } from "@shared/utils/cn";

interface CheckboxProps extends BaseCheckboxProps {
  label?: string | ReactNode;
  labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, labelClassName, ...props }, ref) => {
    let checkbox = (
      <BaseCheckbox
        ref={ref}
        {...props}
      />
    );

    if (label) {
      checkbox = (
        <label
          htmlFor={id}
          className="flex gap-2 items-center"
        >
          {checkbox} <div className={cn(labelClassName)}>{label}</div>
        </label>
      );
    }

    return checkbox;
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

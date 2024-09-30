import { useMaskito } from "@maskito/react";
import Input, { InputProps } from "./Input";
import maskOptions from "@shared/utils/maskOptions";
import { forwardRef } from "react";
import { unmask } from "@shared/utils/maskTools";

interface PhoneInputProps extends InputProps {
  onNumberChange?: (_value: string) => void;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ onNumberChange, ...props }, _ref) => {
    const phoneInput = useMaskito({
      options: maskOptions,
    });

    return (
      <Input
        type="tel"
        name="phone"
        autoComplete="tel"
        onInput={(e) => {
          const value = e.currentTarget.value;
          onNumberChange?.(unmask(value));
        }}
        placeholder="+7 (___) - __ - __"
        ref={phoneInput}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;

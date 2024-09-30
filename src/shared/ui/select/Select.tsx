"use client";

import { forwardRef, useState } from "react";
import BaseSelect from "./BaseSelect";
import { cn } from "@shared/utils/cn";
import Input, { InputProps } from "../input/Input";
import { ArrowBackIosNew } from "@mui/icons-material";
import "./select.scss";

interface SelectProps extends InputProps {
  options: string[];
  label?: string;
  initial?: number;
  search?: boolean;
  description?: string;
  descriptionClass?: string;
  itemWrapperName?: string;
  selectItemName?: string;
  wrapperClass?: string;
}

const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      options,
      search,
      description,
      initial,
      descriptionClass,
      itemWrapperName,
      selectItemName,
      wrapperClass,
      className,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [isOpened, setIsOpened] = useState(false);
    const [value, setValue] = useState(
      initial !== undefined ? options[initial] : ""
    );

    return (
      <div className={cn(wrapperClass)}>
        <BaseSelect
          description={description}
          descriptionClassName={cn(descriptionClass)}
          className={itemWrapperName}
          itemName={selectItemName}
          isOpened={isOpened}
          options={options}
          searchValue={search ? value : ""}
          onSelected={(item) => setValue(item)}
        >
          <Input
            ref={ref}
            value={value}
            placeholder={placeholder}
            className={cn("w-full outline-none", className)}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => {
              setIsOpened(true);
            }}
            onBlur={(e) => {
              isOpened && setTimeout(() => setIsOpened(false), 100);
              e.target.blur();
            }}
            autoComplete="off"
            icon={<ArrowBackIosNew sx={{ width: 20, height: 20 }} />}
            iconClassName={cn(
              isOpened ? "rotate-90" : "-rotate-90",
              "transition-all"
            )}
            {...props}
          />
        </BaseSelect>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

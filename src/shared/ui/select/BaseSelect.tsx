import { cn } from "@shared/utils/cn";
import { escapeRegex } from "@shared/utils/escapeRegex";
import parse from "html-react-parser";
import { HTMLAttributes, ReactNode } from "react";

export interface BaseSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  isOpened: boolean;
  children: ReactNode;
  searchValue?: string;
  onSelected: (_option: string) => void;
  className?: string;
  itemName?: string;
  description?: string;
  descriptionClassName?: string;
}

const BaseSelect = ({
  children,
  isOpened,
  onSelected,
  options,
  itemName,
  className,
  description,
  descriptionClassName,
  searchValue,
}: BaseSelectProps) => {
  return (
    <div className={cn("relative")}>
      {children}
      <div
        className={cn(
          "absolute w-full max-h-48 top-full overflow-auto border bg-white z-50",
          className,
          { hidden: !isOpened }
        )}
      >
        {options
          .filter((option) => {
            const regex = new RegExp(escapeRegex(searchValue || ""), "ig");
            return regex.test(option);
          })
          .map((item, index) => {
            const content = item.replace(
              new RegExp(`(${escapeRegex(searchValue || "")})`, "ig"),
              '<span class="bg-yellow-500">$1</span>'
            );

            const children = parse(content);

            return (
              <div
                key={index}
                className={cn(
                  "p-2 px-3 cursor-pointer transition-all hover:bg-primary-500 hover:text-white",
                  itemName
                )}
                onClick={() => onSelected(item)}
              >
                {children}
              </div>
            );
          })}
      </div>
      <div className={cn("text-gray-500", descriptionClassName)}>
        {description}
      </div>
    </div>
  );
};

export default BaseSelect;

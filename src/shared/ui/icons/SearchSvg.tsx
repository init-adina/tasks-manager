import { cn } from "@shared/utils/cn";

interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export const SearchSvg = ({ className, ...props }: SvgProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn("size-5 group-hover:stroke-primary-300", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      ></path>
    </svg>
  );
};

import { cn } from "@shared/utils/cn";

interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export const ArrowSvg = ({ className, ...props }: SvgProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(
        "size-3 group-hover:fill-primary-300 group-hover:stroke-primary-300",
        className
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  );
};

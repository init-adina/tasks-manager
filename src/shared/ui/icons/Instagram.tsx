import { cn } from "@shared/utils/cn";

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-7", className)}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        ry="4"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <line
        x1="17.5"
        y1="6.5"
        x2="17.5"
        y2="6.5"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Instagram;

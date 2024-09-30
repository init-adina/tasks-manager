import { cn } from "@shared/utils/cn";
import "./loader.scss";

function Loader({
  className,
  display = true,
}: {
  className?: string;
  display?: boolean;
}) {
  return (
    <span className={cn("loader size-56", className, { hidden: !display })} />
  );
}

export default Loader;

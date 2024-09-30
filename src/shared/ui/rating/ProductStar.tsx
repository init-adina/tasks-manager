import { Star } from "@mui/icons-material";
import { cn } from "@shared/utils/cn";

interface StarProps {
  selected: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  staticStar?: boolean;
}

export default function ProductStar({
  selected,
  onClick,
  onMouseEnter,
  onMouseLeave,
  staticStar,
}: StarProps) {
  return (
    <span
      onClick={onClick}
      onMouseOver={onMouseEnter}
      onMouseOut={onMouseLeave}
    >
      {selected ? (
        <Star
          className={cn("text-primary-400", { "cursor-pointer": !staticStar })}
        />
      ) : (
        <Star
          className={cn({ "cursor-pointer": !staticStar }, "text-gray-400")}
        />
      )}
    </span>
  );
}

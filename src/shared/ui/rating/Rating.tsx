import { useState } from "react";
import ProductStar from "./ProductStar";
interface RatingProps {
  initialRating: number;
  staticStars?: boolean;
  onRatingChange?: (_newRating: number) => void;
}

export default function Rating({
  initialRating,
  staticStars,
  onRatingChange,
}: RatingProps) {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
    onRatingChange?.(clickedRating);
  };
  const stars = Array.from({ length: 5 });
  return (
    <ul className="star-rating flex">
      {stars.map((_, index) => {
        if (staticStars)
          return (
            <ProductStar
              staticStar={staticStars}
              key={index}
              selected={index < rating}
            />
          );
        return (
          <ProductStar
            key={index}
            selected={index < hoverRating || index < rating}
            onClick={() => handleStarClick(index + 1)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      })}
    </ul>
  );
}

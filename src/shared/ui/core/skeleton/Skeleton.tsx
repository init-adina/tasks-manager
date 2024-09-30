import { forwardRef, HTMLProps, memo } from "react";
import "./skeleton.scss";
import { SkeletonVariant, skeletonVariants } from "./skeletonSttings";
import { cn } from "@shared/utils/cn";

interface SkeletonProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  bgColor?: string;
  blikOpacity?: number;
  animSpeed?: string;
  variant?: SkeletonVariant;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    className,
    bgColor,
    blikOpacity,
    animSpeed = "1.5s",
    variant = SkeletonVariant.LIGHT_GRAY,
  } = props;

  const blik = blikOpacity
    ? `${blikOpacity}`
    : `${skeletonVariants[variant].blikOpacity}`;

  const style: { [key: string]: string } = {
    "--skeleton-bg": bgColor ? bgColor : skeletonVariants[variant].color,
    "--skeleton-blik-opacoty": blik,
    "--skeleton-anim-speed": `${animSpeed}`,
  };

  return (
    <div
      {...props}
      ref={ref}
      style={style}
      className={cn("skeleton size-full", className)}
    />
  );
});

Skeleton.displayName = "Skeleton";

export default memo(Skeleton);

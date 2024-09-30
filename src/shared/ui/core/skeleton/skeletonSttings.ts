export enum SkeletonColor {
  GRAY = "#e0e0e0",
  LIGHT_GRAY = "#f2f2f2",
}

export enum SkeletonVariant {
  GRAY = "gray",
  LIGHT_GRAY = "light-gray",
}

interface SkeletonOptions {
  blikOpacity: number;
  color: SkeletonColor;
}

export const skeletonVariants: Record<SkeletonVariant, SkeletonOptions> = {
  [SkeletonVariant.GRAY]: {
    blikOpacity: 0.3,
    color: SkeletonColor.GRAY,
  },

  [SkeletonVariant.LIGHT_GRAY]: {
    blikOpacity: 0.7,
    color: SkeletonColor.LIGHT_GRAY,
  },
};

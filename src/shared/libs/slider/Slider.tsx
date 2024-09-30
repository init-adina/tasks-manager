"use client";
import { useEffect, useRef } from "react";
// eslint-disable-next-line import/named
import { create, Options } from "nouislider";
import "./slider.scss";
import { cn } from "@shared/utils/cn";

interface SliderProps {
  options?: Options;
  min?: number;
  max?: number;
  minMax?: boolean;
  connect?: boolean;
  start?: number[];
  onValueChange?: (values: number[]) => void;
  className?: string;
}

function Slider({
  min = 1,
  max = 100,
  start = [10, 50],
  minMax,
  options,
  onValueChange,
  className,
  connect,
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const defaultOptions: Options = {
      range: { min, max },
      connect,
      ...options,
    };

    defaultOptions.start = minMax ? [min, max] : start;

    const slider = create(sliderEl, defaultOptions);

    slider.on("update", (values) => {
      onValueChange?.(
        values.map((num) =>
          Math.floor(typeof num !== "number" ? parseFloat(num) : num)
        )
      );
    });

    return () => slider.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn("slider-custom", className)}
      ref={sliderRef}
    />
  );
}

export default Slider;

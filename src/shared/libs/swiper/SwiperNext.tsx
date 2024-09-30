"use client";

import { cn } from "@shared/utils/cn";
import { createRef, ReactNode, useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  SwiperModule,
  SwiperOptions,
  Swiper as SwiperType,
} from "swiper/types";
import "./swiper.scss";

interface SwiperProps {
  options?: SwiperOptions;
  perView?: number | "auto";
  spaceBetween?: number;
  children?: ReactNode | ReactNode[];
  slides: ReactNode[];
  className?: string;
  modules?: SwiperModule[];
  onSlideChange?: (slide: number, swiper: SwiperType) => void;
  onInit?: (swiper: SwiperType) => void;
}

function SwiperNext({
  options,
  children,
  slides,
  className,
  perView,
  spaceBetween,
  onSlideChange,
  onInit,
  modules = [],
}: SwiperProps) {
  const swiperElement = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!swiperElement.current) return;

    const defaultOptions: SwiperOptions = {
      modules: [Navigation, Pagination, Autoplay, ...modules],

      slidesPerView: perView || 1,

      spaceBetween: spaceBetween || 0,

      ...options,
    };

    defaultOptions.on = {
      ...defaultOptions.on,
      slideChange(swiper) {
        onSlideChange?.(swiper.realIndex, swiper);
      },
      init(swiper) {
        onInit?.(swiper);
      },
    };

    const swiper = new Swiper(swiperElement.current, defaultOptions);

    swiper.slideTo(swiper.activeIndex);

    return () => {
      swiper.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={swiperElement}
      className={cn("swiper overflow-hidden relative", className)}
    >
      <div className="swiper-wrapper flex h-full">{slides}</div>
      {children}
    </div>
  );
}

export default SwiperNext;

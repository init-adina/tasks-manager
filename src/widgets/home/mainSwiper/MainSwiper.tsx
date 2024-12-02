"use client";

import SwiperNext from "@shared/libs/swiper/SwiperNext";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    image: "/assets/img/slides/bg6.jpg",
  },
];

function MainSwiper() {
  return (
    <section className="main-swiper -mt-24 relative">
      <div>
        <SwiperNext
          options={{
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            loop: true,
          }}
          className="h-screen"
          spaceBetween={20}
          modules={[Autoplay]}
          slides={slides.map((slide) => (
            <div
              key={slide.id}
              className="swiper-slide flex shrink-0 relative z-10"
            >
              <ProgressiveImage
                src={slide.image}
                alt="image"
                width={2000}
                height={2000}
                // objectFit="cover"
                className="w-full object-cover brightness-90"
              />

              <div className="absolute inset-0 bg-primary-200/15"></div>
            </div>
          ))}
        />
      </div>
    </section>
  );
}

export default MainSwiper;

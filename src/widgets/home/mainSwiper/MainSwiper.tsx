"use client";

import SwiperNext from "@shared/libs/swiper/SwiperNext";
import Container from "@shared/ui/Container";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    id: 5,
    image: "/assets/img/slides/slidefive.jpg",
  },
  {
    id: 2,
    image: "/assets/img/slides/slidetwo.jpeg",
  },

  {
    id: 1,
    image: "/assets/img/slides/slideone.jpeg",
  },
];

function MainSwiper() {
  return (
    <section className="main-swiper">
      <Container>
        <div>
          <SwiperNext
            options={{
              autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },
              loop: true,
            }}
            spaceBetween={20}
            modules={[Autoplay]}
            slides={slides.map((slide) => (
              <div
                key={slide.id}
                className="swiper-slide flex shrink-0 h-[26rem] rounded-md"
              >
                <ProgressiveImage
                  src={slide.image}
                  alt="image"
                  width={1455}
                  height={385}
                  className="size-full object-cover rounded-md brightness-75"
                />
              </div>
            ))}
          />
        </div>
      </Container>
    </section>
  );
}

export default MainSwiper;

"use client";

import Link from "next/link";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import CurvedSwiperCard from "./CurvedSwiperCard";
import SwiperNext from "@shared/libs/swiper/SwiperNext";
import { IWorkItem } from "@shared/types/IWorkItem";

interface CurvedSwiperProps {
  workItems: IWorkItem[];
}

function CurwedSwiper({ workItems }: CurvedSwiperProps) {
  return (
    <SwiperNext
      modules={[EffectCoverflow]}
      options={{
        effect: "coverflow",
        grabCursor: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 2000,
          modifier: 0.2,
          slideShadows: false,
        },
        breakpoints: {
          1250: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          830: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      }}
      slides={workItems.map((card) => (
        <Link
          href={card.url}
          key={card.id}
          className="swiper-slide shrink-0 w-1/4 block"
        >
          <CurvedSwiperCard
            title={card.title}
            companyName={card.companyName}
            siteType={card.siteType}
            srcUrl={card.srcUrl}
            bgColor={card.bgColor}
            info={card.info}
          />
        </Link>
      ))}
    />
  );
}

export default CurwedSwiper;

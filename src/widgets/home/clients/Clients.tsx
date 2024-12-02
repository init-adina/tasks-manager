"use client";

import SwiperNext from "@shared/libs/swiper/SwiperNext";
import Container from "@shared/ui/Container";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";
import { Autoplay, Navigation } from "swiper/modules";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const clients = [
  { id: 1, image: "/assets/img/clients/client1.png" },
  { id: 2, image: "/assets/img/clients/client2.png" },
  { id: 3, image: "/assets/img/clients/clients3.png" },
  { id: 4, image: "/assets/img/clients/clients4.png" },
  { id: 5, image: "/assets/img/clients/clients5.png" },
  { id: 6, image: "/assets/img/clients/clients6.png" },
  { id: 7, image: "/assets/img/clients/client1.png" },
  { id: 8, image: "/assets/img/clients/client2.png" },
  { id: 9, image: "/assets/img/clients/clients3.png" },
  { id: 10, image: "/assets/img/clients/clients4.png" },
  { id: 11, image: "/assets/img/clients/clients5.png" },
  { id: 12, image: "/assets/img/clients/clients6.png" },
];

function Clients() {
  return (
    <section className="clients">
      <Container>
        <div className="wrapper flex flex-col py-8 gap-4">
          <Headline className="font-medium">Our Clients</Headline>

          <div className="relative">
            <SwiperNext
              spaceBetween={20}
              options={{
                breakpoints: {
                  1024: { slidesPerView: 8 },
                },
                autoplay: {
                  delay: 3000,
                },
                loop: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              }}
              modules={[Autoplay, Navigation]}
              slides={clients.map((client) => (
                <div
                  key={client.id}
                  className="swiper-slide relative flex shrink-0 h-40 p-8"
                >
                  <ProgressiveImage
                    src={client.image}
                    width={150}
                    height={100}
                    alt="client-image"
                    className="size-full"
                    objectFit="contain"
                  />
                </div>
              ))}
            />

            <div className="absolute swiper-button-prev size-8 hover:bg-primary-300 cursor-pointer hover:text-white bg-white rounded-full flex items-center justify-center left-0 top-1/2 -translate-y-1/2">
              <KeyboardArrowLeftIcon sx={{ width: "28px", height: "28px" }} />
            </div>

            <div className="absolute swiper-button-next size-8 hover:bg-primary-300 cursor-pointer hover:text-white bg-white rounded-full flex items-center justify-center right-0 top-1/2 -translate-y-1/2">
              <KeyboardArrowLeftIcon
                sx={{ width: "28px", height: "28px" }}
                className="rotate-180"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Clients;

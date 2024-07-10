"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import { reviews } from "../../../lib/data";
import Image from "next/image";

export default function Slider() {
  const pagination = {
    clickable: true,
    bulletClass: "custom-pagination-bullet",
    bulletActiveClass: "custom-pagination-bullet-active",
  };
  return (
    <Swiper
      className="border my-[2rem]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      speed={1000}
      slidesPerView={1}
      pagination={pagination}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center gap-[1.5rem] mx-[1.5rem] pb-[6rem]">
            <h1 className="text-9xl font-bold italic text-[#f06728]">{'"'}</h1>
            <p className="text-lg mt-[-3rem] text-center text-gray-500 italic lg:w-fit w-[70%]">
              {item.description}
            </p>
            <Image
              src={`/images/testimonials/${item.img}`}
              height={80}
              width={80}
              alt="testimonials"
              className="rounded-full"
            ></Image>
            <h1 className="text-lg font-bold text-center">{item.name}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

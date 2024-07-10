"use client";

import React, { useState } from "react";
import { promoImages } from "../../../lib/data";
import { IoMdArrowUp } from "react-icons/io";
import Image from "next/image";

export default function LastSlider() {
  const [active, setActive] = useState(0);

  const hoverHandler = (index: number) => {
    setActive(index);
  };

  const clickHandler = (index: number) => {
    setActive(index);
  };

  return (
    <section className=" relative h-screen">
      {promoImages.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/images/promo-images/${index}.jpg`}
            alt={`Image ${item.number}`}
            layout="fill"
            objectFit="cover"
            className="w-[fit] h-[fit] "
            unoptimized
          />
        </div>
      ))}

      <div className="relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 h-full">
        {promoImages.map((item, index) => (
          <div
            onClick={() => clickHandler(index)}
            onMouseEnter={() => hoverHandler(index)}
            className="flex flex-col justify-between md:h-full h-[160.5px] overflow-hidden group text-white mix-blend-normal bg-black bg-opacity-40 hover:bg-opacity-70 transition-opacity duration-300 cursor-pointer"
            key={index}
          >
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold flex pl-[2.5rem] pt-[1rem]">
              {item.number}
            </h1>
            <div className="flex items-end pl-[2.5rem] pb-[2rem]">
              <div className="md:pb-[1rem] group-hover:text-[#f06728] transition-all duration-300">
                {item.heading.map((line, lineIndex) => (
                  <h3
                    className="lg:text-2xl md:text-xl text-xl font-bold"
                    key={lineIndex}
                  >
                    {line}
                  </h3>
                ))}
              </div>
              <IoMdArrowUp
                size={50}
                className="transform animate rotate-[35deg] text-[#f06728]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

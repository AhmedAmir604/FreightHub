"use client";

import React, { useEffect, useState, useRef } from "react";
import { slideShowImages } from "../../../lib/data";
import Heading from "./heading";
import NavBtn from "./navButtons";
import Image from "next/image";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Initialize with null

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
      }, 3000);
    };

    startInterval();

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const clickHandler = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setImageIndex(index);
    intervalRef.current = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
    }, 3000);
  };

  return (
    <section className="w-full h-[40rem] bg-black bg-opacity-30 overflow-hidden relative">
      {slideShowImages.map((image, index) => (
        <div key={index} className="">
          <div
            className={`-z-10 absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === imageIndex ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <Image
              src={`/images/${image.url}.jpg`}
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 `}
              alt={`Slide ${index + 1}`}
            />
          </div>
          <Heading imageIndex={imageIndex} key={imageIndex} />

          <div className="text-white mt-[15rem] hidden md:block">
            <NavBtn
              active={index === imageIndex}
              onClick={() => clickHandler(index)}
              num={index + 1}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

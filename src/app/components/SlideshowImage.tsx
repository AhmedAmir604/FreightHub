"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { slideShowImages } from "../../../lib/data";

interface SlideshowImageProps {
  image: { url: string };
  index: number;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideshowImage: React.FC<SlideshowImageProps> = ({
  image,
  index,
  imageIndex,
  setImageIndex,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (index === imageIndex) {
      intervalRef.current = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index, imageIndex, setImageIndex]);

  return (
    <div
      ref={ref}
      className={`-z-10 absolute inset-0 w-full h-full transition-opacity duration-1000 transform ${
        index === imageIndex
          ? `opacity-100 ${inView ? "scale-100" : "scale-120"} animate-fadeIn`
          : "opacity-0"
      }`}
      style={{
        transition: "transform 3s, opacity 1s",
      }}
    >
      <Image
        src={`/images/${image.url}.jpg`}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        alt={`Slide ${index + 1}`}
      />
    </div>
  );
};

export default SlideshowImage;

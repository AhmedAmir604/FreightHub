import React from "react";
import Btn from "./btn";
import { slideShowImages } from "../../../lib/data";

interface Props {
  imageIndex: number;
}

export default function Heading({ imageIndex }: Props) {
  const activeImage = slideShowImages[imageIndex];
  return (
    <div className="ml-[3rem] animate-slideInUp absolute inset-0 flex flex-col lg:items-start items-center  justify-center gap-[10px] text-center text-white">
      <div className="lg:text-8xl text-6xl font-bold text-[var(--primaryColor)]">
        {activeImage.heading1}
      </div>
      <div className="lg:text-8xl text-6xl font-bold">
        {activeImage.heading2}
      </div>
      <div className="lg:text-8xl text-6xl font-bold">
        {activeImage.heading3}
      </div>
      <div className="lg:text-lg text-md mt-[2rem]">
        {activeImage.description}
      </div>
      <div className="flex md:flex-row flex-col gap-[2rem] md:gap-[1rem] mt-[3rem] mb-[-2rem]">
        <Btn name="Read More" color="f06728" activeColor="white" icon={true} />
        <Btn name="More Info" color="25224b" activeColor="white" icon={true} />
      </div>
    </div>
  );
}

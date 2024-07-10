"use client";

import React from "react";
import { reviews } from "../../../lib/data";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className=" flex flex-col justify-around gap-[6rem] items-center mt-[4rem] mx-[2rem]">
      <div>
        <h1 className="text-[#f06728] text-center text-md lg:text-xl font-bold tracking-widest">
          TESTIMONIALS
        </h1>
        <h1 className="text-black text-center text-4xl lg:text-5xl font-bold mt-[1rem]">
          What Our Customers Say
        </h1>
      </div>
    </section>
  );
}

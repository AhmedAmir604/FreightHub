import React from "react";
import Image from "next/image";

export default function ContactHeader() {
  return (
    <section className="relative w-full] h-[70vh] overflow-hidden">
      <div className="fixed inset-0 -z-20 h-full w-full">
        <Image
          src="/images/contactImg.jpg"
          layout="fill"
          objectFit="cover"
          alt="contactBgImg"
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full gap-10">
        <h1 className="text-white font-bold font-sans text-4xl">Contact Us</h1>
        <div className="flex gap-3 text-[1.1rem]">
          <p className="text-[#f06728]">Home</p>
          <p className="text-white">{"//"}</p>
          <p className="text-white">Contacts</p>
        </div>
      </div>
    </section>
  );
}

"use client";
//this file is almost useless better remove it asap
import React, { useState } from "react";
import Image from "next/image";
import { links } from "./data";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function Hamburger() {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <div>
      <HiOutlineMenuAlt1
        size={50}
        color="#f06728"
        className="cursor-pointer fixed top-4 right-4 z-50"
        onClick={clickHandler}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#25224b] text-white z-40 flex flex-col justify-center items-center ${
          active ? "flex" : "hidden"
        }`}
      >
        <Image
          src="/images/logo.png"
          height={100}
          width={120}
          alt="logo"
          className="mb-8"
        />
        <ul className="list-none p-0">
          {links.map((item, index) => (
            <li key={index} className="my-4">
              <a
                className="font-bold text-xl hover:text-[#f06728] transition-all duration-500"
                href={item.hash}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { IoMdArrowUp } from "react-icons/io";

interface props {
  name: string;
  color: string;
  activeColor: string;
  icon: boolean;
}

export default function Btn({ name, color, activeColor, icon }: props) {
  return (
    <button
      onClick={() => console.log("working")}
      className={`w-[14rem] py-[1.5rem] bg-[#${color}] flex justify-center items-center gap-[5px] ${
        activeColor === "white" ? "hover:bg-[#FFFFFF]" : "hover:bg-[#25224b]"
      } transition-all duration-300 group`}
    >
      <h1
        className={`text-white font-bold ${
          activeColor === "white" && "group-hover:text-black"
        }`}
      >
        {name}
      </h1>
      {icon && (
        <IoMdArrowUp
          size={20}
          className={`transform animate rotate-[35deg] text-white ${
            activeColor === "white" && "group-hover:text-black"
          }`}
        />
      )}
    </button>
  );
}

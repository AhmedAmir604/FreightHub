import React from "react";
import Image from "next/image";

export default function Phone() {
  return (
    <a href="#" className="flex gap-[8px] items-center font-bold group">
      <Image
        className="group-hover:vibrate transition-all"
        src={"/images/phoneIconW.png"}
        alt="Phone Icon"
        height={65}
        width={65}
      ></Image>
      {/* <FaPhoneSquareAlt size={50} className="text-[#f06728]" /> */}
      <p className="text-[17px] font-mono">9 500 210 09 21</p>
    </a>
  );
}

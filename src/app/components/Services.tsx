import React from "react";
import { services } from "../../../lib/data";
import { GiCargoShip } from "react-icons/gi";

export default function Services() {
  return (
    <section className="bg-[#25224b]">
      <ul className="flex justify-center items-center flex-wrap lg:gap-[5rem] gap-[5rem] py-[2rem] ">
        {services.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-[3rem] group md:px-0 px-[10px] min-w-[10rem]"
          >
            <div className="flex justify-around items-center gap-[5rem]">
              <div className="flex flex-col items-center gap-[1rem] ">
                <div className=" text-[#f06728] group-hover:translate-y-[-5px] transition-all">
                  <div className="text-6xl">{item.img}</div>
                </div>
                <div className="text-center">
                  <h1 className="text-white font-bold text-md">{item.text1}</h1>
                  <h1 className="text-white font-bold text-md">{item.text2}</h1>
                </div>
              </div>
              {index === 4 ? (
                <></>
              ) : (
                <div className="h-[8rem] w-[1px] hidden lg:inline border border-gray-500 border-dotted"></div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

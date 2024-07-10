import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useMenuContext } from "../../../lib/context";

interface Prop {
  num: number;
  active: boolean;
  onClick: () => void;
}

export default function NavBtn({ num, onClick, active }: Prop) {
  const [dotsCount, setDotsCount] = useState(10);
  const { menuActive } = useMenuContext();

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setDotsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 50); // adjust the interval time to control the speed of transition
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setDotsCount((prev) => (prev > 4 ? prev - 1 : prev));
      }, 50); // adjust the interval time to control the speed of transition
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <div
      className={`flex gap-[5px] relative z-30 justify-end items-center mb-[-12rem] ${
        menuActive ? "hidden" : "visible"
      } `}
    >
      <div
        onClick={onClick}
        className={`flex items-center gap-1 ${
          active ? "text-xl" : "text-md"
        } cursor-pointer`}
      >
        <h1 className="font-bold transition-all duration-300 ease-linear hover:text-[var(--primaryColor)]">
          0{num}
        </h1>
        <div className="flex transition-all ease-linear">
          {Array.from({ length: 50 }).map((_, index) => (
            <GoDotFill
              size={4}
              key={index}
              className={`transition-opacity ${
                index < dotsCount * 3 ? "opacity-100" : "opacity-0 hidden"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

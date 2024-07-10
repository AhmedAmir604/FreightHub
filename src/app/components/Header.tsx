"use client";
import React from "react";
import { useMenuContext } from "../../../lib/context";
import { links } from "../../../lib/data";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const { menuActive, toggleMenu } = useMenuContext();

  return (
    <section className="bg-white sticky top-0 py-[1.4rem] px-[3rem] flex justify-between z-10 border">
      <Image src={"/images/logo.png"} height={10} width={120} alt="logo" />
      <div className="lg:hidden">
        {menuActive == false ? (
          <CiMenuBurger
            size={40}
            color="black"
            className={`cursor-pointer mt-3 fixed top-4 right-4 z-50 hover:scale-110 transition-all duration-200 `}
            onClick={toggleMenu}
          />
        ) : (
          <IoClose
            size={40}
            color="white"
            className={`cursor-pointer fixed top-4 right-4 z-50 hover:scale-110 transition-all duration-100 `}
            onClick={toggleMenu}
          />
        )}
      </div>
      <nav className="py-[1rem]">
        <ul className="justify-between gap-[4rem] hidden lg:flex">
          {links.map((item, index) => (
            <li key={index} className="flex">
              <a
                className="font-bold text-[15px] hover:text-[#f06728] transition-all duration-200"
                href={item.hash}
              >
                {item.name}
              </a>
              <a href="#">
                {index !== 3 && (
                  <IoMdArrowUp
                    size={20}
                    className={`transform animate rotate-[35deg] text-[#f06728] `}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="gap-[8px] items-center font-bold hidden lg:flex">
        <Image
          src={"/images/phoneIcon.png"}
          alt="Phone Icon"
          height={50}
          width={50}
        />
        <p className="text-[16px] font-mono">9 500 210 09 21</p>
      </div>

      {menuActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#25224b] text-white z-40 flex flex-col justify-start items-start gap-[3rem]">
          <div className="mx-[auto] mt-[3rem]">
            <Image
              src={"/images/logo_white_1x.png"}
              height={100}
              width={120}
              alt="logo"
              className={`mb-8`}
            />
          </div>
          <ul className="list-none ml-[2rem]  ">
            {links.map((item, index) => (
              <li
                key={index}
                className="my-4 w-[90vw] flex justify-between cursor-pointer  transition-all duration-500 hover:text-[#f06728]"
              >
                <a
                  className="font-bold text-2xl "
                  href={item.hash}
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  {item.name}
                </a>
                <FaPlus size={20} className={`cursor-pointer mr-[2rem]`} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

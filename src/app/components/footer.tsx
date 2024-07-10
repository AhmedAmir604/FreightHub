import React from "react";
import Image from "next/image";
import Btn from "./btn";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

export default function Footer() {
  return (
    <section>
      <section className="bg-[#25224b] flex md:flex-row flex-col md:justify-around items-center gap-[3rem] py-[3rem]">
        <div className="flex text-center flex-col items-center md:items-start md:text-start gap-[2rem] md:w-[33%] w-full  ">
          <Image
            className=""
            src={`/images/logo_white_1x.png`}
            height={130}
            width={130}
            alt="logo"
          ></Image>
          <p className="text-md w-[75%] text-gray-300 leading-7">
            Logistics services encompass a broad range of activities aimed at
            efficiently managing the movement and storage of goods.
          </p>
          <div className="flex gap-[2.2rem] text-[#f06728] text-lg">
            <FaInstagram className="cursor-pointer hover:text-white duration-200 transition all" />
            <FaFacebookF className="cursor-pointer hover:text-white duration-200 transition all" />
            <FaXTwitter className="cursor-pointer hover:text-white duration-200 transition all" />
          </div>
        </div>

        <div className="md:text-start text-center md:ml-[-5rem] ml-0 flex flex-col gap-[1rem] ">
          <h1 className="text-2xl text-[#f06728] font-semibold">
            Contact info
          </h1>
          <div className="flex md:flex-row flex-col items-center md:items-start gap-[1rem] py-[1rem] ">
            <GrMapLocation className="text-4xl text-[#f06728]" />
            <div className=" flex flex-col gap-[1rem]">
              <h5 className="font-thin text-[#f06728]">Our location:</h5>
              <p className="text-gray-300">13 Division st, New York, 16004</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-[1rem] py-[1rem] ">
            <LuPhoneCall className="text-4xl text-[#f06728]" />
            <div className=" flex flex-col gap-[1rem]">
              <h5 className="font-thin text-[#f06728]">Phones</h5>
              <p className="text-gray-300">+490-800-856-05-39</p>
              <p className="text-gray-300">+490-800-856-05-49</p>
            </div>
          </div>
        </div>

        <div className="md:w-[33%] w-[full] flex flex-col gap-[2rem] md:px-0 px-[1r">
          <h1 className="text-[#f06728] text-2xl font-bold md:text-start text-center">
            Subscribe
          </h1>
          <div className="flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-5">
            <input
              required
              name="name"
              type="text"
              placeholder="Your email ..."
              className="w-[full] h-[4.45rem] px-[2rem]"
            />
            <Btn
              name="Subscribe"
              color="f06728"
              activeColor="white"
              icon={true}
            />
          </div>

          <label
            htmlFor="checkBox"
            className="text-white flex flex-col md:flex-row gap-[1rem] md:ml-[5px] md:text-start text-center"
          >
            <input
              id="checkBox"
              type="checkbox"
              className="focus:outline-none "
            />
            I authorize the use of the information entered
          </label>
        </div>
      </section>
      <div className="bg-[#25224b] text-sm border-t border-gray-700 text-center py-[2rem]">
        <p className="text-[#f06728] inline">Like-themes</p>
        <p className="text-white inline"> © All Rights Reserved - 2024 -</p>
        <p className="text-[#f06728] inline">Purchase</p>
      </div>
    </section>
  );
}

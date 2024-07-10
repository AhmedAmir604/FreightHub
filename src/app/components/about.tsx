"use client";

import React from "react";
import { NumberCounter } from "../../../lib/utils";
import Image from "next/image";
import Button from "./btn";
import Phone from "./phone";

export default function About() {
  return (
    <section className="flex lg:flex-row  flex-col lg:justify-between lg:items-start items-center gap-[2rem] mt-[7rem] mx-[2rem]">
      <div className="border flex flex-col lg:w-[37%] w-full  ">
        <div className="flex flex-col gap-[2rem] lg:text-start text-center text-md">
          <h3 className="font-bold text-[#f06728] tracking-widest">
            ABOUT COMPANY
          </h3>
          <div className="lg:text-5xl text-4xl font-bold mt-[-1rem] pl-[2px]">
            Boost Your Business Efficiency
          </div>
          <p className="leading-[2rem] lg:w-fit w-[90%] mx-auto text-start">
            Digitalization has enabled logistics providers to harness the power
            of data analytics. By collecting and analyzing vast amounts of data,
            companies can gain valuable insights into their supply chain
            operations.
          </p>
        </div>
        <div className="flex items-center gap-[2rem] mt-[3rem]">
          <div className="h-[7rem] w-[5px] bg-[#f06728]"></div>
          <p className="font-bold text-gray-600 w-[25rem] leading-[2rem]">
            Automation is reshaping warehouse operations and order fulfillment
            processes. Robotics, autonomous vehicles, and automated guided
            vehicles.
          </p>
        </div>
        <div className="mt-[4rem] flex md:flex-row lg:flex-row flex-col items-center gap-[2rem]">
          {" "}
          <Button
            name="Read More"
            color="f06728"
            activeColor="25224b"
            icon={true}
          />
          <Phone />
        </div>
      </div>
      <div className="lg:ml-20 ">
        <Image
          src="/images/about.jpg"
          width={530}
          height={500}
          alt="About Image"
        ></Image>
      </div>
      <div className="flex gap-[1rem]">
        {/* starts from here headings */}
        <div className=" flex flex-col gap-[4rem] px-[3rem] py-[3rem] text-center border-[2px] border-black border-dotted lg:w-fit w-[95vw]">
          <div className="text-[#f06728] text-6xl font-bold flex flex-col gap-[1rem] ">
            <div>
              {" "}
              <NumberCounter n={45} key={45} d={300} decimal={0} />
            </div>
            <div className="text-xl font-bold text-black">
              International <br className="text-center" /> Airports
            </div>
          </div>
          <div className="lg:w-[17.3rem] w-[94.5vw] mx-[-3rem] h-[2px] border border-black border-dotted"></div>

          <div className="text-[#f06728] text-6xl font-bold flex flex-col items-center gap-[1rem]">
            <div className="flex pl-[2.2rem]">
              {" "}
              <NumberCounter n={760} key={760} d={300} decimal={0} />+
            </div>
            <div className="text-xl font-bold text-black">
              Branches Around <br className="text-center" /> the World
            </div>
          </div>
          <div className="lg:w-[17.3rem] w-[94.5vw] mx-[-3rem] h-[2px] border border-black border-dotted"></div>

          <div className="text-[#f06728] mb-[1rem] text-6xl font-bold flex flex-col items-center gap-[1rem]">
            <div className="flex">
              <NumberCounter n={8.5} key={100} d={400} decimal={1} />k
            </div>
            <div className="text-xl font-bold text-black">
              Deliveries Per Day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

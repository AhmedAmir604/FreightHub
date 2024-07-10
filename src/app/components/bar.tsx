import React from "react";
import Image from "next/image";
import Button from "./btn";

export default function Bar() {
  return (
    <section className="bg-[#f06728] flex lg:flex-row flex-col justify-around items-center gap-[2rem] lg:gap-0 mt-[5rem] ">
      <Image
        className=" ml-[-2rem]"
        src={"/images/flight.png"}
        height={300}
        width={300}
        alt="airplaneImg"
      ></Image>

      <div className="flex lg:flex-row md:flex-row flex-col items-center gap-[10px] lg:mr-[7rem]">
        <Image
          src={"/images/shield.png"}
          height={70}
          width={70}
          alt="ShieldImg"
        ></Image>
        <div className="text-center lg:text-start lg:font-extrabold font-bold ">
          <h1 className="text-4xl text-white">Delivering Confidence through</h1>
          <h1 className="font-extrabold text-4xl text-[#25224b]">
            Secure Logistics Solutions
          </h1>
        </div>
      </div>

      <div className="lg:mr-[1rem] my-[2rem]">
        {" "}
        <Button
          name="Insure The Cargo"
          color="25224b"
          activeColor="white"
          icon={true}
        />
      </div>
    </section>
  );
}

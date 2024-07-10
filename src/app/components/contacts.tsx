import React from "react";
import { contactInfo } from "../../../lib/data";
import Form from "../contact/form";

export default function Contacts() {
  return (
    <section className="flex flex-col items-center bg-white ">
      <div className="flex flex-wrap justify-center gap-[10rem] mt-[10rem] mb-[10rem]">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col gap-[1rem]">
            <div className="flex justify-center text-[var(--primaryColor)]">
              {item.img}
            </div>
            <div className="text-center text-lg font-bold">{item.heading}</div>
            <div className="">
              <div className="text-md text-gray-500 tracking-wide">
                {item.description}
              </div>
              <div className="text-center text-md text-gray-500">
                {item.description2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Form />
    </section>
  );
}

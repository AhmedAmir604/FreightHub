"use client";

import React from "react";
import Btn from "../components/btn";
import { sendEmail } from "../../../lib/actions";
import toast from "react-hot-toast";

export default function Form() {
  return (
    <section className="flex flex-col items-center gap-8 bg-gray-200 bg-opacity-80 py-16 w-full md:max-w-[60%] md:px-[2rem] mb-[2rem]">
      <h1 className="text-4xl text-gray-800 font-bold text-center">
        Send Message
      </h1>
      <p className="text-gray-600 text-md text-center w-100% md:max-w-md ">
        Fill out this form and our specialists will contact you shortly for
        detailed consultation.
      </p>

      <form
        className="flex flex-col items-start justify-center gap-8 w-full max-w-lg"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          } else {
            toast.success("Sent Successfully :D");
          }
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 w-full px-[5rem] md:px-0">
          <input
            required
            name="name"
            type="text"
            placeholder="Your Name"
            className="border-b leading-8 outline-none border-black w-[70vw] bg-transparent focus:border-b-[var(--primaryColor)] transition-all duration-200"
          />
          <input
            required
            name="email"
            type="text"
            placeholder="Your Email"
            className="border-b leading-8 outline-none border-black w-[70vw] bg-transparent focus:border-b-[var(--primaryColor)] transition-all duration-200"
          />
        </div>
        <textarea
          required
          name="message"
          id="msg"
          placeholder="Message"
          className="border-b  border-black outline-none w-[70%] md:w-full mx-auto h-32  bg-transparent focus:border-b-[var(--primaryColor)] transition-all duration-200"
        ></textarea>
        <div className="mt-8 mx-auto">
          <Btn name="Submit" color="f06728" activeColor="black" icon={false} />
        </div>
      </form>
    </section>
  );
}

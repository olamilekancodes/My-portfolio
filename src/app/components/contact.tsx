"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { toast } from "sonner";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xjkygdag");

  useEffect(() => {
    if (state.succeeded && state.errors === null) {
      toast.success("Message sent successfully!");
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
      reset();
    } else if (state.errors?.kind === "error") {
      toast.error("Something went wrong");
      reset();
    }
  }, [state, reset]);

  return (
    <div
      id="contact"
      className=" flex items-center justify-center flex-col text-white my-10 gap-20 w-full md:px-10 px-0 py-20"
    >
      <h1 className="mt-10 text-lg md:text-3xl font-medium">
        Send me a message!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-12 w-full my-5"
      >
        <div
          className="flex gap-12 flex-col md:flex-row
        "
        >
          <div className="flex flex-col gap-2 md:w-2/5 w-full">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none focus:caret-white autofill:bg-transparent autofill:text-white autofill:border-b-2 autofill:border-white"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2 md:w-3/5 w-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none focus:caret-white autofill:bg-transparent autofill:text-white autofill:border-b-2 autofill:border-white"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none focus:caret-white autofill:bg-transparent autofill:text-white autofill:border-b-2 autofill:border-white min-h-40"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          {state.submitting ? (
            <Image
              src="/Images/loader.svg"
              alt="loader"
              width={50}
              height={50}
            />
          ) : (
            <button
              type="submit"
              disabled={state.submitting}
              className="  border-2 border-[#126cf8] text-[#126cf8] px-4 py-2 rounded-md font-medium transition-colors duration-300 hover:border-[#0d5cb6] hover:text-[#0d5cb6] cursor-pointer"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;

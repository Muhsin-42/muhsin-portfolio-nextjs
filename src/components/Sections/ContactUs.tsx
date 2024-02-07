"use client";
import React, { useRef } from "react";
import SectionHeading from "../Shared/SectionHeading";
import useSectionInView from "@/hook/useSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../Shared/SubmitBtn";
import toast from "react-hot-toast";

const ContactUs = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const { error } = await sendEmail(formData);

      if (error) return toast.error("Something went wrong, Try again.");

      toast.success("Message sent successfully.");
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <motion.section
      className="mb-20 w-[min(100%,38rem)] sm:mb-28"
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading text="Contact me" />
      <p className="-mt-5 text-wrap text-center text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:muhsinofficial21@gmail.com" className="underline">
          muhsinofficial21@gmail.com
        </a>
      </p>
      <form className="mt-8 flex flex-col gap-3" action={handleSubmit}>
        <input
          type="email"
          name="email"
          className="border-black-10 h-14 rounded-lg px-4"
          placeholder="You email"
          required
          maxLength={500}
          ref={emailRef}
        />
        <textarea
          ref={messageRef}
          required
          name="message"
          maxLength={2000}
          className="border-black-10 my-3 h-52 rounded-lg p-4"
          id=""
          placeholder="Your message"
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default ContactUs;

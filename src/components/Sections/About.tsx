"use client";
import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/hook/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-10 max-w-[45rem] scroll-mt-28 text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        {`After graduating with a degree in`}
        <span className="font-medium">{` Bachelor of Computer Application`}</span>
        {`, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp @ Brototype and learned`}{" "}
        <span className="font-medium">
          Full-stack Web Development with MERN Stack
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and MySql. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
};

export default About;

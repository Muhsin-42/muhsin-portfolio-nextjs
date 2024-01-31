"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/dp2.webp"}
              alt="Muhsin A Nissar"
              width={"200"}
              height={"200"}
              quality={"95"}
              priority={true}
              className="size-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-center text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{"Hello, I'm Muhsin."}</span>
        {` I'm a `}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1.5 years</span> of experience. I enjoy
        building <span className="italic">things</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href={"#contact"} className="btn-primary group">
          Contact me here
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>
        <Link
          href={"/resume.pdf"}
          target="_blank"
          className="btn-secondary group"
          download
        >
          Download CV
          <HiDownload className="transition group-hover:translate-y-1" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/muhsin-a-nissar/"}
          target="_blank"
          className="btn-secondary group"
        >
          <BsLinkedin className="" />
        </Link>
        <Link
          href={"https://github.com/Muhsin-42"}
          target="_blank"
          className="btn-secondary"
        >
          <BsGithub />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
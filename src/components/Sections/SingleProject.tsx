"use client";
import { PROJECT_DATA } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof PROJECT_DATA)[number];

export function SingleProject({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      className="group mb-3 last:mb-0 sm:mb-8"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Link href={url} target="_blank">
        <section
          ref={ref}
          className="border-black-5 relative max-w-[42rem] cursor-pointer  overflow-hidden rounded-lg bg-gray-200 transition hover:bg-slate-200 dark:bg-white/10  dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8"
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 sm:mt-auto">
              {tags?.map((tag, index) => (
                <li
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            quality="90"
            className="group-even-hover:rotate-2 absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg 
        shadow-2xl
        transition 
        group-even:-left-40 
        group-even:right-[initial] 

        group-hover:translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-hover:scale-105 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-even:group-hover:scale-105 sm:block
        "
          />
        </section>
      </Link>
    </motion.div>
  );
}

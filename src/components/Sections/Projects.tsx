import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import { PROJECT_DATA } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <SectionHeading text="Projects" />
      <div>
        {PROJECT_DATA?.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

type ProjectProps = (typeof PROJECT_DATA)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="group relative mb-3 max-w-[42rem] cursor-pointer overflow-hidden rounded-lg border border-black/5 bg-gray-200 transition last:mb-0 even:pl-8 hover:bg-slate-200 sm:mb-8 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-3 sm:mt-auto">
          {tags?.map((tag, index) => (
            <li
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
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
        className="group-even-hover:rotate-2 absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        group-even:-left-40 
        group-even:right-[initial] 
        group-hover:translate-x-3 

        group-hover:translate-y-3 
        group-hover:-rotate-2 
        group-hover:scale-105 

        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 
        group-even:group-hover:scale-105 
        "
      />
    </section>
  );
}

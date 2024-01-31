"use client";
import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import { PROJECT_DATA } from "@/lib/data";
import { SingleProject } from "./SingleProject";
import useSectionInView from "@/hook/useSectionInView";
const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading text="Projects" />
      <div>
        {PROJECT_DATA?.map((project, index) => (
          <React.Fragment key={index}>
            <SingleProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

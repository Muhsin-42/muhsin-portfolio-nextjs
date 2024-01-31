import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import { PROJECT_DATA } from "@/lib/data";
import { SingleProject } from "./SingleProject";

const Projects = () => {
  return (
    <section>
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

"use client";
import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES_DATA } from "@/lib/data";
import useSectionInView from "@/hook/useSectionInView";
const Experiences = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading text="My Experience" />
      <VerticalTimeline lineColor="">
        {EXPERIENCES_DATA?.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                backgroundColor: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EXPERIENCES_DATA = [
  {
    title: "MERN Stack Developer",
    location: "Torc Infotech, Ernakulam",
    description: `Worked with a Saudi-based client, where i engaged with diverse technologies including Next.js 13, React.js, TypeScript, Tailwind CSS, ShadCn, Node.js, Express, and MongoDB.`,
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Freelance Developer",
    location: "Smart Crystals, Kochi",
    description: `Worked as a Freelance Developer for a Client called Smart Crystals to build and deploy their platform. Technologies: React, TypeScript, Tailwind CSS, NodeJs, MongoDB.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "MERN Stack Developer",
    location: "Brototype, Ernakulam",
    description: `Was a MERN Stack Development Trainee at Brototype, where I honed skills in JavaScript, TypeScript, React.js, Tailwind CSS, MongoDB, Node.js, Express, and Socket.io.`,
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
] as const;

export const PROJECT_DATA = [
  {
    title: "Bird",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Binge",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Watch Club",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const SKILLS_DATA = [
  "HTML5",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "ShadCn",
  "MaterialUi",
  "Framer Motion",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "Docker",
  "Aws",
  "Nginx",
] as const;

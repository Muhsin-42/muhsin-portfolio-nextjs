import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import birdImg from "../../public/bird.webp";
import bingeImg from "../../public/binge.webp";
import watchClubImg from "../../public/watch-club.webp";
import pdfGenieImg from "../../public/pdf-genie.webp";

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
    description: `Full-Stack multi threaded social media web app built
      using NextJS 14, which allows users to post tweets, like, engage in discussions, bookmark &  also follow other users.`,
    tags: [
      "Next.js",
      "Typescript",
      "React",
      "Tailwind",
      "ShadCn",
      "Zod",
      "MongoDB",
      "Server Action",
    ],
    imageUrl: birdImg,
    url: "https://bird-eight-tan.vercel.app/",
  },
  {
    title: "Binge",
    description: `Binge is a fusion of IMDB & social media, bringing movie
      enthusiasts together in a vibrant community.`,
    tags: [
      "React",
      "SCSS",
      "Material-Ui",
      "Redux",
      "NodeJs",
      "MongoDb",
      "Firebase",
      "Socket.io",
      "CI/CD",
      "NGINX",
      "AWS",
      "EC2",
    ],
    imageUrl: bingeImg,
    url: "https://binge-chat.netlify.app/home",
  },
  {
    title: "Watch Club",
    description: `E-commerce website where users can buy watches. It also has a customized admin panel to manage products, orders, sales reports, etc.`,
    tags: [
      "HTML5",
      "SCSS",
      "BootStrap",
      "Nodejs",
      "Express",
      "Ejs",
      "MongoDB",
      "MVC",
      "CI/CD",
      "NGINX",
      "AWS",
      "EC2",
    ],
    imageUrl: watchClubImg,
    url: "https://watch-club.muhsin-a-nissar.tech",
  },
  {
    title: "PDF Genie",
    description: `Pdf-Genie - An AI powered application where you can have seamless interaction with your pdfs.`,
    tags: [
      "Next.js",
      "Tailwind",
      "NodeJs",
      "Redis",
      "S3 Bucket",
      "OpenAi",
      "CI/CD",
      "Nginx",
      "TypeScript",
    ],
    imageUrl: pdfGenieImg,
    url: "https://pdf-genie-ai.vercel.app/",
  },
] as const;

export const SKILLS_DATA = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Express",
  "Node.js",
  "Rest Api",
  "MVC",
  "MongoDB",
  "PostgreSQL",
  "MySql",
  "Redis",
  "HTML5",
  "CSS",
  "SCSS",
  "Tailwind",
  "ShadCn",
  "MaterialUi",
  "Framer Motion",
  "Chart.js",
  "JWT",
  "Socket.io",
  "OpenAi",
  "PayPal",
  "Razorpay",
  "ESLint",
  "Prettier",
  "Husky",
  "Aws",
  "S3 Bucket",
  "EC2",
  "Nginx",
  "Git",
  "Docker",
  "CI/CD",
] as const;

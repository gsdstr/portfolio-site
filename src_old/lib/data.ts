import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
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

export const experiencesData = [
  {
    title: "Founding Software Engineer",
    company: "Proletek",
    location: "Mersin, Turkey",
    description:
        "I worked as a software engineer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - ",
  },
  {
    title: "Software Engineer",
    company: "Gehtsoft USA LLC",
    location: "Mersin, Turkey",
    description:
        "I worked as a software engineer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Founding Software Engineer",
    company: "Advertising company, NDA",
    location: "Mersin, Turkey",
    description:
        "I worked as a software engineer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2023",
  },
  {
    title: "Software Engineer",
    company: "Dealer-FX",
    location: "Yekaterinburg, Russia",
    description:
        "I worked as a software engineer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2018",
  },
  {
    title: "Lead Software Engineer | Founding Engineer",
    company: "Fanwave LTD",
    location: "Yekaterinburg, Russia",
    description:
        "I worked as a software engineer for 2 years. ",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2013",
  },
  {
    title: "Lead Software Engineer in R&D Department",
    company: "Promelektronika",
    location: "Yekaterinburg, Russia",
    description:
        "I worked as a software engineer for 2 years. ",
    icon: React.createElement(CgWorkAlt),
    date: "2008 - 2012",
  },
  {
    title: "Software engineer",
    company: "Vedisoft | Software Engineer",
    location: "Yekaterinburg, Russia",
    description:
        "I worked as a software engineer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2008",
  },
  {
    title: "Master's degree in Mathematics and Computer Science",
    company: "Ural State Technical University",
    location: "Yekaterinburg, Russia",
    description:
      "I got a Master's degree in Mathematics and Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2002 - 2008",
  },
] as const;

export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Git",
  "Meteor.js",
  "MongoDB",
  "Java",
  "Kotlin",
  "Android",
  "PostgreSQL",
  "MongoDB",
  "Vue.js",
  "n8n",
  "Qt",
] as const;
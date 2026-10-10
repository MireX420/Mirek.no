// All site content lives here, so updating the portfolio means editing this file only.
import webDev from "./assets/project-webdev.webp";
import komDes from "./assets/project-komdes.webp";

export const profile = {
  name: "Adrian Mirek",
  role: "Cybersecurity",
  tagline:
    "MSc student in Cybersecurity, working where security, risk and design meet: building systems that are safe by default and still easy to use.",
  email: "adrianmi@hiof.no",
  github: "https://github.com/MireX420",
  linkedin: "https://www.linkedin.com/in/adrian-mirek-6b7396354/",
  about: [
    "I'm a developer and designer driven by a passion for creating secure, intuitive and visually engaging digital experiences. My work centres on blending creativity, usability and security to craft solutions that feel both seamless and meaningful.",
    "I'm currently pursuing a Master's in Cybersecurity, exploring how thoughtful design and strong security can work hand in hand to build a safer digital future.",
  ],
  focus: [
    {
      title: "Risk & threat modeling",
      text: "Identifying what matters, what can go wrong and which controls are worth the cost.",
    },
    {
      title: "Secure system design",
      text: "Building security in from the first sketch instead of bolting it on at the end.",
    },
    {
      title: "Usable security",
      text: "Controls people actually follow, because the secure path is also the easy one.",
    },
  ],
};

export const projects = [
  {
    title: "Communication Design Exam Project",
    year: "2024",
    description:
      "Website built for my Communication Design course, focused on clear information structure and visual storytelling.",
    tags: ["UX/UI", "Information design", "Web"],
    image: komDes,
    url: "https://info-wars-git-main-crayhars-projects.vercel.app/",
  },
  {
    title: "Web Development Exam Project",
    year: "2022",
    description:
      "Website built for my Web Development course: responsive layout, accessible markup and hand-written HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: webDev,
    url: "https://mirex420.github.io/adrianmi.github.io/index.html",
  },
];

export const skills = [
  {
    group: "Cybersecurity & Management",
    items: [
      "Cybersecurity management & policy",
      "Risk assessment & threat modeling",
      "Secure system design",
      "Digital privacy & data protection",
      "Cyber ethics & governance",
    ],
  },
  {
    group: "Development & Technology",
    items: [
      "Web development (JavaScript, React, Sanity)",
      "Interaction & responsive design",
      "Usability testing & accessibility",
      "Basic programming & scripting",
    ],
  },
  {
    group: "Design",
    items: [
      "UX/UI design",
      "Visual & graphic design",
      "Design thinking & prototyping",
      "3D modeling & animation",
      "Branding & digital storytelling",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Visual Studio Code",
      "Figma",
      "Adobe Creative Suite",
      "Blender / Maya",
    ],
  },
];

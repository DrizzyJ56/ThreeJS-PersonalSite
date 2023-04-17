import {
  logo,
    music,
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    fullstack,
    threejsSS,
    eBazon,
    fitnessTracker,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
   const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Musician",
      icon: music,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Developing and maintaining web sites using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, project manager, and company CEO to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Development Bootcamp",
      company_name: "FullStack Academy",
      icon: fullstack,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, instructors, and other developers to create high-quality web applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "ThreeJS Personal Site",
      description:
        "A modern web application for employers to contact me as well as show off my skills and projects. Also a place I can experiment with new libraries in my free time. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threejsSS,
      source_code_link: "https://github.com/DrizzyJ56/ThreeJS-PersonalSite",
    },
    {
      name: "eBazon",
      description:
        "High Quality eCommerce web application that enables users to post products, send messages and offers on products, and purchase products using Stripe API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: eBazon,
      source_code_link: "https://github.com/The-Syntax-Savants/eBazon",
    },
    {
      name: "Fitness Tracker",
      description:
        "A comprehensive fitness tracking platform that allows members to create routines, activities, and offers public workout routines for it's members.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitnessTracker,
      source_code_link: "https://github.com/DrizzyJ56/new-fitness-tracker",
    },
  ];
  
  export { services, technologies, experiences, projects };
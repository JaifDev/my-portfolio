import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  threejs,
  thirdzone,
  carrent2,
  carrent3,
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
    title: "Firebase & AWS Developer",
    icon: creator,
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
    title: "Full Stack Developer",
    company_name: "Third Zone",
    icon: thirdzone,
    iconBg: "#383E56",
    date: "March 2022 - Current",
    points: [
      "Developing and maintaining Android application using react native",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jaif proved me wrong.",
    name: "Jesús Ortiz Paz",
    designation: "Frontman",
    company: "Street Mob Records",
    image:
      "https://www.billboard.com/wp-content/uploads/2023/10/Chino-Pacas-press-credit-Street-Mob-Records-2023-billboard-1548.jpg?w=942&h=623&crop=1",
  },
];

const projects = [
  {
    name: "Multi Vendor Ecommerce",
    description:
      "Web based multi vendor ecommerce platform that allows users to browse and purchase products from multiple vendors. Along with admin panel and dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JaifDev/multi-vendor-ecom",
  },
  {
    name: "Recipe App",
    description:
      "An app that helps you find recipes based on ingredients you have at home.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "apis",
        color: "pink-text-gradient",
      },
    ],
    image: carrent2,
    source_code_link: "https://github.com/JaifDev/recipe-app",
  },
  {
    name: "Uber Clone",
    description:
      "A ride sharing app with drivers and riders. Both apps are included one for drivers and one for riders.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "aws amplify",
        color: "pink-text-gradient",
      },
    ],
    image: carrent3,
    source_code_link: "https://github.com/JaifDev/uber-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };

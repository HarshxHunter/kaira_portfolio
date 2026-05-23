import project1 from "../assets/projects/edublock-brand.webp";
import project2 from "../assets/projects/goldy.webp";
import project3 from "../assets/projects/bucle.png";
import project4 from "../assets/projects/sociopedia.png";
import project5 from "../assets/projects/ecomvision.png";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import jsIcon from "../assets/skills/javascript.svg";
import tailwindIcon from "../assets/skills/tailwind.svg";
import muiIcon from "../assets/skills/mui.png";
import reactIcon from "../assets/skills/reactjs.svg";
import reduxIcon from "../assets/skills/redux.svg";
import tsIcon from "../assets/skills/typescript.svg";
import nextIcon from "../assets/skills/nextjs.svg";
import framerMotion from "../assets/skills/framer.png";
import nodejs from "../assets/skills/nodejs-icon.svg";
import express from "../assets/skills/expressjs.svg";
import mongodb from "../assets/skills/mongoDB.svg";
import vscode from "../assets/skills/vs-code.svg";
import sublime from "../assets/skills/sublime.svg";
import mongoosejs from "../assets/skills/Mongoosejs.svg";
import firebase from "../assets/skills/firebase.svg";
import cpp from "../assets/skills/CPP.png";
import java from "../assets/skills/JavaIcon.png";
import intellij from "../assets/skills/IntelliJ_IDEA.png";
import figma from "../assets/skills/figma.svg";
import postman from "../assets/skills/Postman.svg";
import netlify from "../assets/skills/netlify.svg";
import git from "../assets/skills/git-icon.svg";
import github from "../assets/skills/github.svg";
import gitlab from "../assets/skills/gitlab-icon.svg";
import xeroOneAni from "../assets/skills/zeroone.webm";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
 {
  title: "SecurePay Payin Portal",
  liveLink: "https://uat.securepay.co/",
  image: project1,
  description:
    "Developed a scalable Payin portal for admins and merchants with role-based access control, merchant onboarding, payment integrations, risk and velocity management, QR generation, bank configuration, and Soundbox merchant onboarding workflows.",
  tags: ["NextJs", "ReactJS", "MUI", "HTML", "TailwindCSS", "AWS", "Axios", "CSS", "Redux", "Figma", "React Hook Form", "JavaScript", "Git", "BitBucket", "Postman", "VS Code"],
  },
  {
    title: "SecurePay Payout Portal",
    liveLink: "https://uatpayout.securepay.co/",
    image: project1,
    description:
      "Built a secure Payout portal for admins and merchants featuring role-based access control, merchant onboarding, payout integrations, beneficiary management, internal fund transfers, and bulk and single payout workflows with scalable dashboard interfaces.",
    tags: ["NextJs", "ReactJS", "Shadcn", "HTML", "CSS", "TailwindCSS", "Zustand", "AWS", "React Hook From", "Zod", "TypeScript", "Figma", "Git", "BitBucket", "Postman", "VS Code"],
  },
  {
    title: "SecurePay Website",
    liveLink: "https://www.securepay.co/",
    image: project1,
    description:
      "Developed a fully responsive fintech company website from scratch with modern UI/UX, interactive animations, reusable layouts, data visualizations, dynamic sections, and core business pages focused on performance, scalability, and seamless user experience.",
    tags: ["NextJs", "ReactJS", "Tailwind CSS", "Framer Motion", "HTML", "CSS", "Figma", "Git", "BitBucket", "Postman", "VS Code"],
  },
  {
    title: "Edublock",
    liveLink: "https://superadmin.edu-block.org/login",
    image: project1,
    description:
      "EduBlock connects institutions, students, employers via blockchain. Enables certificate issuance, verification.Institutions manage departments, user roles, invitations, payment policies. Admins handle users, passwords. Graduates receive, employers verify certificates.",
    tags: ["NextJs", "Typescript", "Tailwind CSS", "MUI", "HTML", "CSS", "Redux", "Figma", "Git", "Gitlab", "Postman", "IntelliJ"],
  },
  {
    title: "Goldy Token",
    liveLink: "https://testnet.goldytoken.com/",
    image: project2,
    description:
      "Goldy Token revolutionizes gold ownership by leveraging blockchain technology. It offers a secure, transparent, and easily tradable digital representation of gold, eliminating storage, security, and liquidity challenges. Each token is backed by physical gold bars, ensuring tangible value.",
    tags: ["NextJs", "Typescript", "Tailwind CSS", "MUI", "HTML", "CSS", "Redux", "Figma", "Git", "Gitlab", "Postman", "IntelliJ"],
  },
  {
    title: "Bucle Labs Website",
    liveLink: "https://bucle.dev/",
    image: project3,
    description:
      "Developed and maintained a modern Web3 company website for a blockchain consultancy and software services firm, building responsive pages, dynamic UI sections, reusable components, blog experiences, and interactive layouts focused on performance, scalability, and seamless user experience across devices.",
    tags: ["NextJs", "Typescript", "GSAP", "ThreeJs", "Tailwind CSS", "MUI", "HTML", "CSS", "Context API", "Figma", "Git", "Gitlab", "Postman", "IntelliJ"],
  },
  {
    title: "Sociopedia",
    liveLink: "https://sociopedia-for-sociopaths.netlify.app/",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    tags: ["React","Javascript","MUI","Redux","Dropzone","Express","Node","Mongodb","Mongoose","JWT","Multer","HTML","CSS","Git","Github","VScode"],
  },
  {
    title: "ECOMVISION",
    liveLink: "https://admin-frontend-xpdv.onrender.com/",
    image: project5,
    description:
      "Built a full-stack admin dashboard and analytics platform with responsive data visualizations, transaction management, customer insights, server-side pagination, interactive charts with dark and light modes.",
    tags: ["React","Javascript","MUI","Redux","Lucid Chart & Nivo","Dropzone","Express","Node","Mongodb","Mongoose","JWT","Multer","HTML","CSS","Git","Github","VScode"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


export const Frontend_skill = [
  {
    skill_name: "Next js 13",
    Image: nextIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: reactIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Html 5",
    Image: htmlIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: cssIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwindIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: muiIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: framerMotion,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: reduxIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    Image: figma,
    width: 50,
    height: 50,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: nodejs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: express,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: mongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Postman",
    Image: postman,
    width: 70,
    height: 70,
  },
  {
    skill_name: "Netlify",
    Image: netlify,
    width: 70,
    height: 70,
  },
  {
    skill_name: "Mongoose JS",
    Image: mongoosejs,
    width: 55,
    height: 55,
  },
  // {
  //   skill_name: "Firebase",
  //   Image: firebase,
  //   width: 55,
  //   height: 55,
  // },
];

export const Full_stack = [
  {
    skill_name: "Docker",
    Image: "/docker.svg",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },

];

export const Languages = [
  {
    skill_name: "Java Script",
    Image: jsIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: tsIcon,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    Image: java,
    width: 60,
    height: 60,
  },
  {
    skill_name: "C++",
    Image: cpp,
    width: 60,
    height: 60,
  }
];

export const SoftwareTools = [
  {
    skill_name: "Git",
    Image: git,
    width: 60,
    height: 60,
  },
  {
    skill_name: "GitHub",
    Image: github,
    width: 60,
    height: 80,
  },
  {
    skill_name: "Gitlab",
    Image: gitlab,
    width: 60,
    height: 80,
  },
  {
    skill_name: "VS Code",
    Image: vscode,
    width: 60,
    height: 80,
  },
  {
    skill_name: "IntelliJ IDEA",
    Image: intellij,
    width: 60,
    height: 80,
  },
  {
    skill_name: "Sublime Text",
    Image: sublime,
    width: 60,
    height: 60,
  },
];

export const lastOne = [
  {
    skill_name: "01",
    Image: xeroOneAni,
    width: 80,
    height: 80,
  }
];

export const links = [
  {
    name: "Home",
    hash: "#hero",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] 
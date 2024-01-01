import { SiTailwindcss, SiGithub, SiReact, SiExpress, SiTypescript   } from "react-icons/si";

export const cardContent = [
  {
    id: 0,
    title: "Calendar",
    state: "Go",
    description:
      "Calendar with login, powered by React and Express",
      projectUrl:"https://calendar749.netlify.app",
    imageUrl: "/calendar.jpg",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiExpress  size="40" />
      },

    ]
  },
  {
    id: 1,
    title: "To Do List",
    state: "Go",
    description:
      "To-do list project crafted with React",
      projectUrl:"https://todo-list749.netlify.app",
    imageUrl: "/todo-list.jpg",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiGithub size="40" />
      },
      {
        icon: <SiTypescript size="40" />
      },
    ]
  },
  {
    id: 2,
    title: "Cinema",
    state:'Go',
    description:
      "React cinema project with public API",
    projectUrl:"https://cinema749.netlify.app",
    imageUrl: "/movies.jpg",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiGithub size="40" />
      },
    ]
  },
  {
    id: 3,
    title: "Threads Clone",
    state:'On Progress',
    description:
      "Modern social clone with React and Express",
    projectUrl:"",
    imageUrl: "/threads.jpg",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiExpress size="40" />
      },
    ]
  },
  // {
  //   id: 4,
  //   title: "E-Commerce React",
  //   description:
  //     "This is a description, sjdnfsdf idfs sdhfbsdf jds fjsd gf sjdgns",
  //   imageUrl: "/work-5.jpeg",
  //   skills: [
  //     {
  //       icon: <SiNextdotjs size="40" />
  //     },
  //     {
  //       icon: <SiTailwindcss size="40" />
  //     },
  //     {
  //       icon: <SiGithub size="40" />
  //     },
  //   ]
  // },
];

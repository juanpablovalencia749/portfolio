import { SiTailwindcss, SiGithub, SiReact, SiExpress, SiTypescript   } from "react-icons/si";

export const cardContent = [
  {
    id: 0,
    title: "Calendar",
    state: "Go",
    description:
      "Project made by React and Express",
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
      "Project made by React",
      projectUrl:"https://todo-list749.netlify.app/",
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
    title: "Movies",
    state:'In Progress',
    description:
      "Project create by React and public Api",
    projectUrl:"",
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
  // {
  //   id: 3,
  //   title: "Prestashop",
  //   description:
  //     "This is a description, sjdnfsdf idfs sdhfbsdf jds fjsd gf sjdgns",
  //   imageUrl: "/work-4.jpeg",
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

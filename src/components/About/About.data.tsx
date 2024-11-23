import {  SiReact, SiExpress, SiPostgresql, SiMongodb   } from "react-icons/si";



export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "years of experience",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Improving English Skills",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 5,
    text: "Completed Projects",
    lineRight: true,
    lineRightMobile: false,
  },
];


export const dataAboutSkills = [
  {
    id: 0,
    text: "Skills",
    skills: [
      {
        title: "React",
        date: <SiReact size="20" />
      },
      {
        title: "Node",
        date: <SiExpress  size="20" />
      },
      {
        title: "PostgreSQL",
        date: <SiPostgresql size="20"/>
      },
      {
        title: "MongoDB",
        date: <SiMongodb size="20"/>
      },
    ],
  },
  {
    id: 1,
    text: "Experience",
    skills: [
      {
        title: "Wolkvox",
        date: "Jan 2022 - Oct2022",
      },
      {
        title: "GBI-Mark",
        date: "Dec 2022 - Sep 2023",
      },
      {
        title: "Nebula",
        date: "Feb 2024 - Present",
      },
    ],
  },
  {
    id: 2,
    text: "Studies",
    skills: [
      {
        title: "Analysis and Information Systems",
        date: "2020",
      },
    ],
  },
];

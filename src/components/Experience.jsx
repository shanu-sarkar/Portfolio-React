import React from "react";

import bable from "../assets/portfolio/bable.jpeg";
import bootstrap from "../assets/portfolio/bootstrap.png";
import css from "../assets/portfolio/css.png";
import express from "../assets/portfolio/express-js.png";
import git from "../assets/portfolio/git-pp.png";
import github from "../assets/portfolio/github.png";
import html from "../assets/portfolio/html.png";
import javasvript from "../assets/portfolio/javascript.png";
import mongo from "../assets/portfolio/mongo-db.jpeg";
import next from "../assets/portfolio/nextjs.png";
import node from "../assets/portfolio/node-ja.png";
import react from "../assets/portfolio/react.png";
import redux from "../assets/portfolio/redux.png";
import tailwind from "../assets/portfolio/tailwind.png";
import vite from "../assets/portfolio/vite.jpeg";
import vsCode from "../assets/portfolio/vs-codepp.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
      tech: "https://www.w3schools.com/html/",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      tech: "https://www.w3schools.com/css/css_website_layout.asp",
    },
    {
      id: 3,
      src: javasvript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      tech: "https://www.w3schools.com/js/",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-500",
      tech: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    },
    {
      id: 5,
      src: tailwind,
      title: "tailwindcss",
      style: "shadow-sky-500",
      tech: "https://tailwindcss.com/",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-sky-500",
      tech: "https://react.dev/",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-pink-500",
      tech: "https://redux.js.org/",
    },
    {
      id: 8,
      src: vite,
      title: "Vite",
      style: "shadow-fuchsia-600",
      tech: "https://vitejs.dev/",
    },
    {
      id: 9,
      src: next,
      title: "Next JS",
      style: "shadow-stone-300",
      tech: "https://nextjs.org/",
    },
    {
      id: 10,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-lime-400",
      tech: "https://shorturl.at/GO023",
    },
    {
      id: 11,
      src: express,
      title: "Express JS",
      style: "shadow-yellow-500",
      tech: "https://expressjs.com/",
    },
    {
      id: 12,
      src: node,
      title: "Node JS",
      style: "shadow-lime-600",
      tech: "https://dev.to/t/node",
    },
    // {
    //   id: 13,
    //   src: bable,
    //   title: "bable",
    //    style: "shadow-yellow-600"
    // },
    {
      id: 14,
      src: git,
      title: "Git",
      style: "shadow-red-700",
      tech: "https://git-scm.com/docs",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-stone-500",
      tech: "https://github.com/",
    },
    {
      id: 16,
      src: vsCode,
      title: "vsCode",
      style: "shadow-blue-800",
      tech: "https://code.visualstudio.com/",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-srceen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 p-2 inline border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, tech }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg group ${style}`}
            >
              <a href={tech} target="_blank">
                <img src={src} alt="" className="w-20 mx-auto" />
              </a>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

//

import React from "react";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMui,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiCypress,
  SiExpress,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
  SiReactquery,
  SiZod,
} from "react-icons/si";

export type TechListType = keyof typeof techList;

export type TectIconsProps = {
  techs: Array<TechListType>;
};

const TechIcons = ({ techs }: TectIconsProps) => {
  return (
    <ul className="flex gap-2 mt-2">
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <li
            className="text-xl text-gray-700 dark:text-gray-200"
            key={current.name}
          >
            <current.icon />
          </li>
        );
      })}
    </ul>
  );
};

export default TechIcons;

const techList = {
  react: {
    icon: SiReact,
    name: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  javascript: {
    icon: SiJavascript,
    name: "Javascript",
  },
  typescript: {
    icon: SiTypescript,
    name: "typescript",
  },
  mui: {
    icon: SiMui,
    name: "mui",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "tailwindcss",
  },
  php: {
    icon: SiPhp,
    name: "php",
  },
  mysql: {
    icon: SiMysql,
    name: "mysql",
  },
  laravel: {
    icon: SiLaravel,
    name: "laravel",
  },
  cypress: {
    icon: SiCypress,
    name: "cypress",
  },
  express: {
    icon: SiExpress,
    name: "express",
  },
  nodejs: {
    icon: SiNodedotjs,
    name: "nodejs",
  },
  css: {
    icon: SiCss3,
    name: "css",
  },
  bootstrap: {
    icon: SiBootstrap,
    name: "bootstrap",
  },
  reactquery: {
    icon: SiReactquery,
    name: "reactquery",
  },
  zod: {
    icon: SiZod,
    name: "zod",
  },
};

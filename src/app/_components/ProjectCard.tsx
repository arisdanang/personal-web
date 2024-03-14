import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";
import TechIcons, { TechListType } from "./TechIcons";
import Link from "next/link";

type ProjectCardProps = {
  id: number | string;
  name: string;
  desc: string;
  imageSrc: string;
  techs: string;
  link: string;
};

const ProjectCard = ({
  id,
  name,
  desc,
  imageSrc,
  techs,
  link,
}: ProjectCardProps) => (
  <Link
    href={link}
    className="max-w-sm border-2 dark:border-gray-700 rounded-md p-4 flex flex-col items-start justify-between"
    key={id}
  >
    <h3 className="font-semibold text-md">{name}</h3>
    <p className="text-sm text-gray-700 mt-2 dark:text-gray-300">{desc}</p>
    <TechIcons techs={techs.split(",") as Array<TechListType>} />
    <Image
      className="w-full h-auto object-cover object-center shadow-md rounded-md mt-3"
      src={imageSrc}
      alt={name}
      width={500}
      height={500}
      quality={60}
      priority
    />
  </Link>
);
export default ProjectCard;

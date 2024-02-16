import React from "react";
import Accent from "../_components/Accent";
import type { Metadata } from "next";
import ProjectCard from "../_components/ProjectCard";
import data from "../../data/projects.json";
export const metadata: Metadata = {
  title: "Projects | Aris Danang",
  description: "Project yang udah saya kerjakan",
};

const Page = () => {
  return (
    <main className="py-12 min-h-[calc(100vh_-_300px)] max-w-[68rem] w-[91.67%] mr-auto ml-auto">
      <h2 className="text-2xl md:text-4xl font-bold mt-1">
        <Accent>Projects</Accent>
      </h2>
      <p className="mt-2 mb-4 text-gray-700 dark:text-gray-300">
        project yang sudah saya buat
      </p>

      <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3 mb-5">
        {data?.projects?.map(({ id, name, imageSrc, desc, techs, link }) => (
          <ProjectCard
            key={id}
            name={name}
            id={id}
            desc={desc}
            imageSrc={imageSrc}
            techs={techs.toString()}
            link={link}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;

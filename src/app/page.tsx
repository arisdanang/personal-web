"use client";

import Accent from "./_components/Accent";
import ButtonLink from "./_components/ButtonLink";
import ProjectCard from "./_components/ProjectCard";
import data from "../data/projects.json";

export default function Home() {
  return (
    <main className="py-12">
      <section
        id="intro"
        className="mb-20 flex flex-col justify-center dark:text-white max-w-[68rem] w-[91.67%] mr-auto ml-auto"
      >
        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold">Hi!</h2>
        <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl font-bold">
          You can call me <Accent>Danang</Accent>
        </h1>
        <p className="mt-4 max-w-4xl text-gray-700 md:mt-6 md:text-lg 2xl:text-xl dark:text-white">
          Welcome to my creative space! I am a{" "}
          <Accent>Software Engineer (Frontend)</Accent> who is always excited to
          learn new things about{" "}
          <span className="underline decoration-wavy">Web Development</span>.
          Enjoy exploring here!
        </p>

        <div className="flex flex-wrap gap-4 md:!text-lg mt-4">
          <ButtonLink href="https://drive.google.com/file/d/1xjmWQJbwynQomjhAXoDARZCy2rgXRZQ7/view?usp=sharing">
            My Resume
          </ButtonLink>
          <ButtonLink href="/about">Learn more about me</ButtonLink>
        </div>
      </section>
      <section
        id="projects"
        className="max-w-[68rem] w-[91.67%] mr-auto ml-auto"
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-5">
          <Accent>Projects</Accent>
        </h2>
        <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3 mb-5">
          {data?.projects
            .slice(0, 3)
            .map(({ id, name, desc, imageSrc, techs, link }) => (
              <ProjectCard
                link={link}
                key={id}
                id={id}
                name={name}
                desc={desc}
                imageSrc={imageSrc}
                techs={techs.toString()}
              />
            ))}
        </div>
        <ButtonLink
          className="px-4 py-2 border rounded-md font-semibold scale-100 hover:scale-[1.03] active:scale-[0.97]"
          href="/projects"
        >
          Explore more projects
        </ButtonLink>
      </section>
    </main>
  );
}

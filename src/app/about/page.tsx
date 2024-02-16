import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "../layout/Container";
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
} from "react-icons/si";
import Accent from "../_components/Accent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Aris Danang",
  description: "About myself",
};

const page = () => {
  return (
    <main className="py-12 max-w-[68rem] w-[91.67%] mr-auto ml-auto">
      <section id="intro" className="mb-10">
        <h2 className="text-xl md:text-3xl font-bold">About</h2>
        <h1 className="text-2xl md:text-4xl font-bold mt-1">
          <Accent>Aris Danang Pridiksono</Accent>
        </h1>

        <div className="mt-4">
          <figure className="float-right">
            <Image
              src="/profile.jpeg"
              alt="profile"
              width={300}
              height={300}
              priority
              className="rounded-md w-40 md:w-72  object-cover object-center ml-4"
            />
          </figure>
          <article>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Hello! I&apos;m Danang. My journey into the world of programming
              began when I was in vocational high school in 2018. The first time
              I encountered programming, I was assigned to create a biodata in
              the C programming language, and thankfully I met my senior,{" "}
              <Link
                href="https://www.linkedin.com/in/rochmanramadhani"
                className="underline decoration-wavy"
              >
                Rochman
              </Link>
              , who taught me programming. for the first time.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Fast forward to 2019, when my focus shifted to the field of web
              development. I started exploring PHP and the Laravel Framework,
              met upperclassmen, namely,
              <Link
                href="https://www.linkedin.com/in/al-falah-lazuardi-mahmudi-54840b192"
                className="underline decoration-wavy"
              >
                Falah
              </Link>
              ,
              <Link
                href="https://www.linkedin.com/in/rochim-ramadhani"
                className="underline decoration-wavy"
              >
                Rochim
              </Link>
              , and{" "}
              <Link
                href="https://www.linkedin.com/in/ashandi-leonadi"
                className="underline decoration-wavy"
              >
                Ashandi
              </Link>{" "}
              , who were willing to guide me. And then, in 2021, I started
              exploring the exciting world of frontend. starting from YouTube
              videos, Udemy courses, and articles that helped me learn the world
              of Frontend.
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
              Fast forward to 2019, when my focus shifted to the field of web
              development. I started exploring PHP and the Laravel Framework,
              and my relationship with my seniors, namely, Falah, Rochim, and
              Ashandi, who also became mentors at that time, increased. And
              then, in 2021, I started exploring the exciting world of frontend.
              starting from YouTube videos, Udemy courses, and articles that
              helped me learn the world of Frontend.
            </p>
          </article>
        </div>
      </section>
      <section id="skills" className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          <Accent>Skills</Accent>
        </h3>
        <div className="text-3xl md:text-4xl flex flex-wrap gap-4">
          <SiReact />
          <SiNextdotjs />
          <SiJavascript />
          <SiTypescript />
          <SiCss3 />
          <SiMui />
          <SiTailwindcss />
          <SiCypress />
          <SiReactquery />
          <SiNodedotjs />
          <SiExpress />
        </div>
      </section>
      <section id="experience" className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold">
          <Accent>Work Experiences</Accent>
        </h3>
        <article className="mt-4">
          <ol className="list-decimal list-inside">
            <li className="mb-4">
              <Accent className="font-semibold">
                Jr. Frontend Engineer - Happy5
              </Accent>
              <p className="text-gray-700 mb-2 dark:text-gray-300">
                In my role, I&apos;m the go-to collaborator between product and
                backend teams, driving the creation of a game-changing
                Performance App feature. Offering insights on Peer Pull
                Requests, and optimizing JavaScript into TypeScript solutions
                are my specialties. I seamlessly integrated Amplitude Analytics
                and implemented a top-notch end-to-end testing framework using
                Cypress. With a remarkable 90++% SLA response time, I swiftly
                tackle bugs within 24 hours. In a nutshell, I&apos;m the wizard
                crafting innovative features, streamlining code, and swiftly
                resolving bugs.
              </p>
              <div>
                <p className="font-semibold mb-2">Tech Stack: </p>
                <div className="text-2xl md:text-3xl flex gap-4 text-gray-700 dark:text-gray-300">
                  <SiReact />
                  <SiJavascript />
                  <SiTypescript />
                  <SiTailwindcss />
                  <SiCypress />
                  <SiReactquery />
                </div>
              </div>
            </li>
            <li>
              <Accent className="font-semibold">
                Web Developer - PT. Pratama Natanusa Mandiri
              </Accent>
              <p className="text-gray-700 mb-2 dark:text-gray-300">
                In my role, I collaborated with a skilled team to design and
                develop both an internal company website and a visually stunning
                client website using Laravel, MySQL, and Bootstrap technologies.
                The internal website is a vital tool for efficiently managing
                and tracking invoices, while the client website delivers a
                user-friendly online experience.
              </p>
              <div>
                <p className="font-semibold mb-2">Tech Stack: </p>
                <div className="text-2xl md:text-3xl flex gap-4 text-gray-700 dark:text-gray-300">
                  <SiPhp />
                  <SiLaravel />
                  <SiMysql />
                  <SiBootstrap />
                  <SiCss3 />
                </div>
              </div>
            </li>
          </ol>
        </article>
      </section>
    </main>
  );
};

export default page;

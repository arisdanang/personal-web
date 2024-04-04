import React from "react";
import { FiMail } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 pb-2 max-w-[68rem] w-[91.67%] mr-auto ml-auto">
      <main className="flex items-center justify-center flex-col border-t pt-6 dark:text-gray-300">
        <p className="font-medium">Reach me out</p>
        <div className="flex space-x-4 mt-4">
          {/* parent */}
          <div className="flex items-center justify-center">
            {/* mail */}
            <Link
              href="mailto:arisdanang2810@gmail.com"
              aria-label="let's contact me"
              className="hover:text-primary-300/50"
            >
              <FiMail className="my-auto w-8 h-8" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            {/* mail */}
            <Link
              target="_blank"
              aria-label="my repository"
              href="https://github.com/arisdanang"
              className="hover:text-primary-300/50"
            >
              <IoLogoGithub className="my-auto w-8 h-8" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            {/* mail */}
            <Link
              target="_blank"
              aria-label="let's connect with me"
              href="https://www.linkedin.com/in/aris-danang/"
              className="hover:text-primary-300/50"
            >
              <IoLogoLinkedin className="my-auto w-8 h-8" />
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-xs md:text-base">
            © {new Date().getFullYear()} Aris Danang Pridiksono • Made with ❤️
          </p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;

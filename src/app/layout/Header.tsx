"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../_components/ThemeSwitcher";

const Header: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 max-w-[68rem] w-[91.67%] mr-auto ml-auto">
      <nav className="flex items-center justify-between py-4 ">
        <ul className="flex items-center justify-between space-x-3 text-xs md:text-base md:space-x-4">
          <li>
            <Link href="/" className="">
              <span
                className={
                  pathname == "/"
                    ? "hover:bg-primary-300/20 font-medium transition-colors bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tr"
                    : "bg-primary-300/0"
                }
              >
                Home
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="hover:bg-primary-300/20 font-medium dark:text-white"
            >
              <span
                className={
                  pathname == "/projects"
                    ? "hover:bg-primary-300/20 font-medium transition-colors bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tr"
                    : "bg-primary-300/0"
                }
              >
                Projects
              </span>
            </Link>
          </li>
          {/* <li>
              <Link
                href="/contact"
                className="hover:text-primary-300 font-medium"
              >
                <span
                  className={pathname == "/contact" ? "bg-primary-300/50" : ""}
                >
                  Contact
                </span>
              </Link>
            </li> */}
          <li>
            <Link
              href="/blog"
              className="hover:bg-primary-300/20 font-medium dark:text-white"
            >
              <span
                className={
                  pathname == "/blog"
                    ? "hover:bg-primary-300/20 font-medium transition-colors bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tr"
                    : "bg-primary-300/0"
                }
              >
                Blog
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:bg-primary-300/20 font-medium dark:text-white"
            >
              <span
                className={
                  pathname == "/about"
                    ? "hover:bg-primary-300/20 font-medium transition-colors bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tr"
                    : "bg-primary-300/0"
                }
              >
                About
              </span>
            </Link>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;

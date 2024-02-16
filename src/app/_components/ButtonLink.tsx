import React from "react";
import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";
import clsx from "clsx";

type ButtonLinkProps = { onClick?: () => void } & UnstyledLinkProps;

const ButtonLink = ({
  children,
  className = "",
  target,
  ...rest
}: ButtonLinkProps) => {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "inline-flex rounded-lg px-5 py-2.5 font-medium text-sm md:text-base",
        "border border-gray-300 shadow-sm dark:border-gray-600",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
        "scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu",
        "motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90",
        "transition duration-100",
        "animate-shadow",
        className
      )}
      target={target}
    >
      {children}
    </UnstyledLink>
  );
};

export default ButtonLink;

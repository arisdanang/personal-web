import Link from "next/link";
import React from "react";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
};

const UnstyledLink = ({
  children,
  href,
  className,
  target,
  ...rest
}: UnstyledLinkProps) => {
  return (
    <Link href={href} className={className} {...rest} target={target}>
      {children}
    </Link>
  );
};

export default UnstyledLink;

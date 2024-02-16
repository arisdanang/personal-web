import React from "react";
import clsx from "clsx";

type AccentType = React.ComponentPropsWithoutRef<"span">;

const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={clsx(
        "transition-colors",
        "bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40",
        "dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Accent;

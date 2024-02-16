import React from "react";

const Container = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <div className="max-w-[68rem] w-[91.67%] mr-auto ml-auto">{children}</div>
  );
};

export default Container;

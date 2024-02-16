import React from "react";
import Container from "../layout/Container";
import Accent from "../_components/Accent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLog | Aris Danang",
  description: "pengennya ini buat halaman blog",
};

const page = () => {
  return (
    <main className="py-12 min-h-[calc(100vh_-_280px)] max-w-[68rem] w-[91.67%] mr-auto ml-auto">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        <Accent>Coming soon....</Accent>
      </h1>
    </main>
  );
};

export default page;

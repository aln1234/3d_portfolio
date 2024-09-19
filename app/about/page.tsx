/* eslint-disable react/no-unescaped-entities */

import Bio from "@/components/Bio";
import TechList from "@/components/TechList";

export default function About() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 mt-[4rem] lg:py-16">
      <Bio />
      <TechList />
    </section>
  );
}

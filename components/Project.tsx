import React from "react";
import clsx from "clsx";
import Heading from "./Heading";
import ContentList from "./ContentList";

const Projects = () => {
  return (
    <section className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16")}>
      <div className="mx-auto w-full max-w-7xl">
        <Heading size="xl" className="mb-8">
          Projects
        </Heading>
        <div className="prose prose-xl prose-invert mb-10 text-white text-2xl">
          A selection of some of my favorite website and design projects.
        </div>
        <ContentList />
      </div>
    </section>
  );
};

export default Projects;

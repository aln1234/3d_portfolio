import React from "react";
import clsx from "clsx";
import Heading from "./Heading";
import ContentList from "./ContentList";
import { blogList, projectList } from "@/constants";
import { Project } from "@/types";

const Projects = ({ title, subtitle }: Project) => {
  return (
    <section className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16")}>
      <div className="mx-auto w-full max-w-7xl">
        <Heading size="xl" className="mb-8">
          {title}
        </Heading>
        <div className="prose prose-xl prose-invert mb-10 text-white text-2xl">
          {subtitle}
        </div>
        {title === "Projects" ? (
          <ContentList data={projectList} />
        ) : (
          <ContentList data={blogList} />
        )}
      </div>
    </section>
  );
};

export default Projects;

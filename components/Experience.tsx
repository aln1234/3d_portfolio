import React from "react";
import Heading from "./Heading";
import { educationList, experienceList } from "@/constants";

type Experience = {
  title: string;
};

const Experience = ({ title }: Experience) => {
  return (
    <section className="overflow-hidden mt-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading as="h2" size="lg">
            {title}
          </Heading>
        </div>
        {title === "Experience" ? (
          <>
            {experienceList.map((item, index) => (
              <div
                key={index}
                className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16"
              >
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>

                <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                  <span>{item.time}</span>
                  <span className="text-3xl font-extralight">/</span>{" "}
                  <span>{item.company}</span>
                </div>
                <div className="prose prose-lg prose-invert mt-4">
                  <p className="text-slate-100 text-2xl">{item.content}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {educationList.map((item, index) => (
              <div
                key={index}
                className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16"
              >
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>

                <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                  <span>{item.time}</span>
                  <span className="text-3xl font-extralight">/</span>{" "}
                  <span>{item.company}</span>
                </div>
                <div className="prose prose-lg prose-invert mt-4">
                  <p className="text-slate-100 text-2xl">{item.content}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;

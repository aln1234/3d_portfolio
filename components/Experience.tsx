import React from "react";
import Heading from "./Heading";

const Experience = () => {
  return (
    <section className="overflow-hidden mt-24" ref={component}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading as="h2" size="lg">
            Experience
          </Heading>
        </div>
      </div>
      {techList.map((item, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={label || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 && color ? color : "inherit",
                }}
              >
                {label}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Experience;

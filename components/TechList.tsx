"use client";

import React, { useLayoutEffect, useRef } from "react";
import Heading from "./Heading";
import { gsap } from "gsap";
import { techList } from "@/constants";
import { MdCircle } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const component = useRef(null);

  // animation part of code
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //create as many gsap animations and/or scroll triggers

      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <section className="overflow-hidden mt-24" ref={component}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading size="xl" className="mb-8" as="h2">
            What I use
          </Heading>
        </div>
      </div>
      {techList.map(({ label, color }, index) => (
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

export default TechList;

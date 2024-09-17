"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import Shapes from "./Animation/Shapes";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[50vh] grid-cols-1 items-center md:grid-cols-2 gap-[8rem]">
        <Shapes />
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1 className="mb-8  font-extrabold leading-none tracking-tighter">
            <span className="block text-[8rem] text-slate-300">
              {renderLetters("Albin", "first")}
            </span>
            <span className="-mt-[.0em] text-[5rem] block text-slate-500  ">
              {renderLetters("Lamichhane", "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-[#1e90ff] via-[#2ed573] to-[#5352ed] bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            Front-end Developer
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

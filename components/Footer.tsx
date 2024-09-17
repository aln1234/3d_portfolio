import React from "react";
import Bounded from "./Bounded";
import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col justify-between items-center gap-6 py-8 sm:flex-row">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-lighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Albin Lamichhane
          </Link>
          <span className="hidden text-5xl font-extralight leading[0] text-slate-400 sm:inline">
            /
          </span>
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Albin Lamichhane
          </p>
        </div>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            href="https://github.com/aln1234"
            className="p-2 text-2xl text-slate-300 transition-all duraiton-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/alvin.lamichhane.7"
            className="p-2 text-2xl text-slate-300 transition-all duraiton-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.linkedin.com/in/albinlamichhane/"
            className="p-2 text-2xl text-slate-300 transition-all duraiton-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;

"use client";
import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav aria-label="Main naviagtion">
        <ul className="flex bg-slate-50 flex-col rounded-b-lg px-4 justify-between py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="Home page"
              className="text-xl font-extrabold tracking-tighter text-slate-900"
            >
              Albin
            </Link>
            <button
              className="block p-2 text-2xl text-slate-800 md:hidden"
              aria-label="Close Menu"
              aria-expanded={open}
              onClick={() => setOpen(false)}
            >
              <MdMenu />
            </button>
          </div>
          <div
            className={clsx(
              "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
              open ? "translate-x-0" : "translate-x-[100%]"
            )}
          >
            <button
              aria-label="Close menu"
              aria-expanded={open}
              className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>
            <Fragment>
              <li className="first:mt-8">
                <Link
                  href="/about"
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes("about")
                        ? "translate-y-6"
                        : "translate-y-18"
                    )}
                  />
                  <span className="relative">About</span>
                </Link>
              </li>
            </Fragment>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";
import { navItems } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
// import Button from "./Button";

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
              className="text-2xl font-extrabold tracking-tighter text-slate-900"
            >
              <Image
                src="/logo.png"
                alt="logo"
                height={50}
                width={100}
                className=""
              />
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
            {navItems.map(({ link, label }, index) => (
              <Fragment key={label}>
                <li className="first:mt-8">
                  <Link
                    href="/about"
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(link as string) ? "page" : undefined
                    }
                  >
                    <span
                      className={clsx(
                        "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                        pathname.includes(link as string)
                          ? "translate-y-6"
                          : "translate-y-18"
                      )}
                    />
                    <span className="relative">{label}</span>
                  </Link>
                </li>
                {index < navItems.length - 1 && (
                  <span
                    className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </Fragment>
            ))}
            <li>{/* <Button /> */}</li>
          </div>
          <DesktopMenu pathname={pathname} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {navItems.map(({ link, label }, index) => (
        <Fragment key={label}>
          <li className="">
            <Link
              href={link}
              className={clsx(
                "group relative block  overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              )}
              aria-current={
                pathname.includes(link as string) ? "page" : undefined
              }
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(link as string)
                    ? "translate-y-6"
                    : "translate-y-8"
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < navItems.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

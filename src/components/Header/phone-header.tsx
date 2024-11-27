"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoImage from "@/../public/assets/images/logoImage.png";
import MenuIcon from "./menu-icon";
import NavbarLinks from "./navbar-links";

export default function PhoneHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex items-center justify-between bg-mainColorBlue p-4 px-6">
      <Link href="/">
        <Image
          src={logoImage}
          alt="Pethub image"
          className="h-10 w-40 md:h-10 lg:h-14 lg:w-56 xl:h-16"
        />
      </Link>

      <button onClick={() => setShowMenu(true)}>
        <MenuIcon />
      </button>

      <div
        className={`fixed top-20 z-[999] w-[90%] rounded-xl bg-mainColorBlue/90 p-8 transition-all duration-500 ease-in-out ${
          showMenu ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
        style={{ pointerEvents: showMenu ? "auto" : "none" }}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setShowMenu(false)}
            className="text-3xl font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <nav className="OpenSans flex flex-col space-y-8 text-2xl font-semibold text-mainColorWhite">
          <NavbarLinks closeMenu={() => setShowMenu(false)} />
        </nav>
      </div>
    </div>
  );
}

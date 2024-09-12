"use client";

import NavbarLinks from "../Header/navbar-links";

export default function Footer() {
  return (
    <footer className="z-[9999] w-full space-y-6 bg-mainColorBlue p-4">
      <div className="flex flex-col items-center justify-between px-4 text-xl md:flex-row">
        <NavbarLinks />
      </div>
      <div className="flex items-center justify-center space-x-10">
        <button>INSTAGRAM</button>
        <button>INSTAGRAM</button>
        <button>INSTAGRAM</button>
      </div>
    </footer>
  );
}

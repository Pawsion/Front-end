"use client";
import { FaInstagram } from "react-icons/fa";
import NavbarLinks from "../Header/navbar-links";

export default function Footer() {
  return (
    <footer className="z-[9999] w-full space-y-6 bg-mainColorBlue p-4 mt-20">
      <div className="flex flex-col items-center justify-between px-4 text-xl md:flex-row">
        <NavbarLinks />
      </div>
      <div className="flex items-center justify-center space-x-10">
        <a href="www.instagram.com/petsion">
          <FaInstagram className="size-10 text-inactiveLink" />
        </a>
      </div>
    </footer>
  );
}

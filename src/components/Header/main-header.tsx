"use client";
import Link from "next/link";
import logoImage from "../../../public/assets/images/logoImage.png";
import Image from "next/image";
import NavbarLinks from "./navbar-links";
import { useState } from "react";

export default function MainHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <header
      className="flex items-center justify-between bg-mainColorBlue px-8 py-4"
      style={{
        padding: "28px 8px",
        top: 0,
        zIndex: 9999,
      }}
    >
      <div className="ml-56 flex items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Pethub image"
            className="h-14 w-56 md:h-10 lg:h-14 xl:h-16"
          />
        </Link>
      </div>
      <nav className="OpenSans mr-56 flex space-x-12 font-semibold text-inactiveLink">
        <NavbarLinks closeMenu={closeMenu} />
      </nav>
    </header>
  );
}

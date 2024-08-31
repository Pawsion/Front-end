"use client";
import Link from "next/link";
import logoImage from "../../../public/assets/images/logoImage.png";
import { useState } from "react";
import LoginForm from "../Login/loginForm";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Updated import

export default function MainHeader() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header
      className="flex items-center justify-between bg-mainColorBlue px-8 py-4"
      style={{
        padding: "28px 8px",
        // position: "sticky",
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
      <nav className="OpenSans mr-56 flex space-x-12 font-semibold text-mainColorWhite">
        <Link
          href="/pansioni"
          className={pathname === "/pansioni" ? "text-activeLinkGold" : ""}
        >
          Pansioni
        </Link>
        <Link
          href="/saloni"
          className={pathname === "/saloni" ? "text-activeLinkGold" : ""}
        >
          Saloni
        </Link>
        <Link
          href="/pansioni"
          className={pathname === "/pansioni" ? "text-activeLinkGold" : ""}
        >
          Pansioni
        </Link>
        <Link
          href="/veterinari"
          className={pathname === "/veterinari" ? "text-activeLinkGold" : ""}
        >
          Veterinari
        </Link>
        <Link
          href="/dresura"
          className={pathname === "/dresura" ? "text-activeLinkGold" : ""}
        >
          Dresura
        </Link>

        <Link
          href="/blog"
          className={pathname === "/blog" ? "text-activeLinkGold" : ""}
        >
          Blog
        </Link>
        <a href="#" onClick={handleLoginClick}>
          Login
        </a>
      </nav>
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
    </header>
  );
}

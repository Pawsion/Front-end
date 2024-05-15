"use client";
import Link from "next/link";
import logoImage from "../../../public/assets/images/logoImage.png";
import { useState } from "react";
import LoginForm from "../Login/loginForm";
import Image from "next/image";

export default function MainHeader() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header
      className="flex items-center justify-between bg-mainColorBlue px-8 py-4"
      style={{ padding: "28px 8px" }}
    >
      <div className="ml-56 flex items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Pethub image"
            className="h-5 md:h-6 lg:h-8 xl:h-9"
          />
        </Link>
      </div>
      <nav className="mr-16 flex space-x-20 font-Bogart text-mainColorWhite">
        <Link href="/pansioni">Pansioni</Link>
        <Link href="/saloni">Saloni</Link>
        <Link href="/azili">Azili</Link>
        <Link href="/imena">Imena</Link>
        <Link href="/perionice">Perionice</Link>
        <Link href="/dresura">Dresura</Link>
        <Link href="/parkici">Parkići</Link>
        <Link href="/blog">Blog</Link>
        <a href="#" onClick={handleLoginClick}>
          Login
        </a>
      </nav>
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
    </header>
  );
}

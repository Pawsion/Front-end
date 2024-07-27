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
      className="flex items-center justify-between bg-mainColorBlue px-8 py-4 "
      style={{
        padding: "28px 8px",
        position: "sticky",
        top: 0,
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
      <nav className="mr-56 flex space-x-24 font-semibold OpenSans text-mainColorWhite">
        <Link href="/pansioni">Pansioni</Link>
        <Link href="/saloni">Saloni</Link>
        <Link href="/aplikacija">Aplikacija</Link>
        <Link href="/blog">Blog</Link>
        <a href="#" onClick={handleLoginClick}>
          Login
        </a>
      </nav>
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
    </header>
  );
}

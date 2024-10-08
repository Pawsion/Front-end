import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={
          pathname === "/" ? "text-activeLinkGold" : "hover:text-activeLinkGold"
        }
      >
        Početna
      </Link>
      <Link
        href="/saloni"
        className={
          pathname === "/saloni"
            ? "text-activeLinkGold"
            : "hover:text-activeLinkGold"
        }
      >
        Saloni
      </Link>
      <Link
        href="/pansioni"
        className={
          pathname === "/pansioni"
            ? "text-activeLinkGold"
            : "hover:text-activeLinkGold"
        }
      >
        Pansioni
      </Link>
      <Link
        href="/veterinari"
        className={
          pathname === "/veterinari"
            ? "text-activeLinkGold"
            : "hover:text-activeLinkGold"
        }
      >
        Veterinari
      </Link>
      <Link
        href="/dresura"
        className={
          pathname === "/dresura"
            ? "text-activeLinkGold"
            : "hover:text-activeLinkGold"
        }
      >
        Dresura
      </Link>

      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "text-activeLinkGold"
            : "hover:text-activeLinkGold"
        }
      >
        Blog
      </Link>
    </>
  );
}

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
          pathname === "/"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Početna
      </Link>
      <Link
        href="/saloni"
        className={
          pathname === "/saloni"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Saloni
      </Link>
      <Link
        href="/pansioni"
        className={
          pathname === "/pansioni"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Pansioni
      </Link>
      <Link
        href="/veterinari"
        className={
          pathname === "/veterinari"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Veterinari
      </Link>
      <Link
        href="/dresura"
        className={
          pathname === "/dresura"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Dresura
      </Link>

      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "text-activeLinkGold"
            : "text-inactiveLink hover:text-activeLinkGold"
        }
      >
        Blog
      </Link>
    </>
  );
}

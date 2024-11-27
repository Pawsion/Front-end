import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarLinksProps {
  closeMenu: () => void;
}

export default function NavbarLinks({ closeMenu }: NavbarLinksProps) {
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
        onClick={closeMenu}
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
        onClick={closeMenu}
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
        onClick={closeMenu}
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
        onClick={closeMenu}
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
        onClick={closeMenu}
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
        onClick={closeMenu}
      >
        Blog
      </Link>
    </>
  );
}

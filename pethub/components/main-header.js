import Link from "next/link";
import logoImage from "@/assets/images/logoImage.png";

export default function MainHeader() {
  return (
    <header className="bg-mainColorBlue py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <img src={logoImage.src} alt="Pethub image" />
      </Link>
      <nav className="flex space-x-4 text-mainColorWhite">
        <Link href="/pansioni">Pansioni</Link>
        <Link href="/saloni">Saloni</Link>
        <Link href="/azili">Azili</Link>
        <Link href="/imena">Imena</Link>
        <Link href="/perionice">Perionice</Link>
        <Link href="/dresura">Dresura</Link>
        <Link href="/parkici">Parkići</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}

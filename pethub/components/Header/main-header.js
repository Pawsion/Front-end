import Link from "next/link";
import logoImage from "@/assets/images/logoImage.png";

export default function MainHeader() {
  return (
    <header className="bg-mainColorBlue py-4 px-8 flex justify-between items-center" style={{ padding: "24px 8px" }}>
      <div className="flex items-center ml-48">
        <Link href="/">
          <img src={logoImage.src} alt="Pethub image" className="h-5 md:h-6 lg:h-7 xl:h-8" />
        </Link>
      </div>
      <nav className="flex space-x-4 text-mainColorWhite font-Bogart">
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

import Link from "next/link";
import logoImage from "@/assets/images/logoImage.png";

export default function MainHeader() {
  return (
    <header className="bg-mainColorBlue py-4 px-8 flex justify-between items-center" style={{ padding: "28px 8px" }}>
      <div className="flex items-center ml-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <Link href="/">
          <img src={logoImage.src} alt="Pethub image" className="h-5 md:h-6 lg:h-8 xl:h-9" />
        </Link>
      </div>
      <nav className="flex space-x-20 mr-16 text-mainColorWhite font-Bogart">
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

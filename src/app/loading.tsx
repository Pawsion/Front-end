import Link from "next/link";
import logoImage from "../../public/assets/images/logoImage.png";
import Image from "next/image";

export default function HeroLoadingPage() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-200">
      <Link href="/">
        <Image
          src={logoImage}
          alt="Pethub logo"
          className="h-12 animate-pulse md:h-16 lg:h-20"
        />
      </Link>
    </div>
  );
}

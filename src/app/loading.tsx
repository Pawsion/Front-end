import Link from "next/link";
import logoImage from "../../public/assets/images/logoImage.png";
import Image from "next/image";

export default function HeroLoadingPage() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200">
      <Link href="/">
        <Image
          src={logoImage}
          alt="Pethub logo"
          className="h-12 md:h-16 lg:h-20 animate-pulse"
        />
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/../public/assets/images/logoImage.png";

export default function PhoneHeader() {
  return (
    <div className="flex items-center justify-between bg-mainColorBlue p-4 px-6">
      <Link href="/">
        <Image
          src={logoImage}
          alt="Pethub image"
          className="h-10 w-40 md:h-10 lg:h-14 lg:w-56 xl:h-16"
        />
      </Link>

      {/* TODO finish button */}
      <button> BUTTON</button>
    </div>
  );
}

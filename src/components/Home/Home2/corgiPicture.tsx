import React from "react";
import Image from "next/image";
import dogImage from "../../../../public/assets/images/Homescreen2/corgiDog.png";
import dogShadow from "../../../../public/assets/images/Homescreen2/corgiShadow.png";

export default function CorgiImage() {
  return (
    <div className="relative z-[-1] hidden h-full w-full items-center justify-start lg:flex">
      <div className="absolute left-8 top-16">
        <Image src={dogShadow} alt="Dog Shadow" layout="intrinsic" />
      </div>
      <div className="absolute left-8 top-16">
        <Image src={dogImage} alt="Dog" layout="intrinsic" />
      </div>
    </div>
  );
}

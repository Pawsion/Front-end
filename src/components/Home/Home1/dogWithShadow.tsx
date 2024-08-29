import Image from "next/image";
import React from "react";
import dog from "@/../public/assets/images/Homescreen1/homeDogImage.png";
import dogShadow from "@/../public/assets/images/Homescreen1/homeDogShadow.png";

export default function DogWithShadow() {
  return (
    <div className="hidden lg:flex">
      <div className="absolute  right-0 top-[-30px] z-[-1]  max-h-[70vh] w-auto max-w-full">
        <Image
          src={dogShadow}
          alt="Dog Shadow"
          className="max-h-[65vh] w-auto max-w-full animate-slideInLeft"
        />
      </div>
      <div className="absolute  right-[3vh] top-[-20px] z-[-1] w-auto max-w-full">
        <Image
          src={dog}
          alt="Dog"
          className="max-h-[60vh] w-auto max-w-full animate-slideInLeft"
        />
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import dogImage from "../../../public/assets/images/homeDogImage.png";

export default function DogImage() {
  return (
    <Image
      src={dogImage}
      alt="Dog"
      className="w-auto max-w-full max-h-[100vh] absolute right-[25vh] top-[-30vh] z-[-1] animate-slideInLeft"
    />
  );
}

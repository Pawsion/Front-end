import React from "react";
import Image from "next/image";
import dogImage from "../../../public/assets/images/homeDogImage.png";

export default function DogImage() {
  return (
    <Image
      src={dogImage}
      alt="Dog"
      className="absolute right-[25vh] top-[-30vh] z-[-1] max-h-[100vh] w-auto max-w-full animate-slideInLeft"
    />
  );
}

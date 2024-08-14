import React from "react";
import Image from "next/image";
import dogImage from "../../../public/assets/images/Homescreen1/homeDogImage.png";
import dogShadow from "../../../public/assets/images/Homescreen1/homeDogShadow.png";

export default function DogImage() {
  return (
    <>
      <div className="absolute right-[1px] top-[-30vh] z-[-2] max-h-[70vh] w-auto max-w-full">
        <Image
          src={dogShadow}
          alt="Dog Shadow"
          className="max-h-[90vh] w-auto max-w-full animate-slideInLeft"
        />
      </div>
      <div className="absolute right-[5vh] top-[-28vh] z-[-1] w-auto max-w-full">
        <Image
          src={dogImage}
          alt="Dog"
          className="max-h-[85vh] w-auto max-w-full animate-slideInLeft"
        />
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import dogImage from "../../../../public/assets/images/Homescreen3/dog.png";
import dogShadow from "../../../../public/assets/images/Homescreen3/dogShadow.png";

export default function DogPicuteThird() {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <div className="absolute top-14">
        <Image
          src={dogShadow}
          alt="Dog Shadow"
          layout="intrinsic"
        />
      </div>
      <div
        className="absolute top-16"
        style={{ transform: "scale(0.95)" }}
      >
        <Image
          src={dogImage}
          alt="Dog"
          layout="intrinsic"
        />
      </div>
    </div>
  );
}

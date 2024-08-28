import React from "react";
import orangePaw from "@/../public/assets/images/Homescreen1/orangePaw.png";
import purplePaw from "@/../public/assets/images/Homescreen1/purplePaw.png";
import Image from "next/image";

export default function Paws() {
  return (
    <div className=" flex flex-row justify-between">
      <Image
        src={orangePaw}
        alt="Orange Paw Image"
        width={90}
        height={90}
        className="lg:hidden"
      />
      <Image
        src={purplePaw}
        alt="Purple Paw Image"
        width={113}
        height={113}
        className="lg:hidden"
      />
    </div>
  );
}

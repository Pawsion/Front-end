import Image from "next/image";
import React from "react";
import { SaloniData } from "@/utils/types";

export default function SaloniSection({
  title,
  description,
  description2,
  image,
}: SaloniData) {
  return (
    <div className="m-auto w-3/4 space-y-10 py-20">
      <Image src={image} alt="Scissors image" className="m-auto" />
      <h4 className="text-center text-5xl">{title}</h4>
      <p>{description}</p>
      <p>{description2}</p>
    </div>
  );
}

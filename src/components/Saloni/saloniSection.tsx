import Image from "next/image";
import React from "react";
import { SaloniData } from "@/utils/types";
import SaloniButton from "./saloniButton";
import { parseDescription } from "@/utils/parser";

interface SaloniSectionProps extends SaloniData {
  buttonLabels: string[];
  onButtonClick: (label: string) => void;
}

export default function SaloniSection({
  title,
  description,
  description2,
  image,
  buttonLabels,
  onButtonClick,
}: SaloniSectionProps) {
  return (
    <div className="m-auto w-3/4 space-y-10 py-20 text-left xl:text-2xl"> 
      <Image src={image} alt="Scissors image" className="m-auto" />
      <h2 className="text-5xl text-center">{title}</h2>
      <p>{parseDescription(description)}</p>
      <p>{parseDescription(description2)}</p>
      <SaloniButton locations={buttonLabels} onButtonClick={onButtonClick} />
    </div>
  );
}

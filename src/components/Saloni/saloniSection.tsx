import Image from "next/image";
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
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div id={sectionId} className="m-auto w-3/4 xl:w-max space-y-10 py-20 text-left xl:text-left xl:text-2xl">
      <Image
        src={image}
        alt="Scissors image"
        className="m-auto w-28 h-28 md:w-44 md:h-44"
        width={181}
        height={181}
      />
      <h2 className="xl:text-5xl text-2xl text-center">{title}</h2>
      <p>{parseDescription(description)}</p>
      <p>{parseDescription(description2)}</p>
      <SaloniButton locations={buttonLabels} onButtonClick={onButtonClick} />
    </div>
  );
}

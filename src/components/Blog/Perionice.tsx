import React from "react";
import Image from "next/image";
import perioniceImage from "../../../public/assets/images/Blog/Perionice.png";

const Perionice = () => {
  return (
    <div className="flex justify-center py-4 mt-8">
      <div className="flex w-[76vw] max-w-[76vw]">
        <div className="relative w-[33.25vw] max-w-[33.25vw] h-[512px] overflow-hidden">
          <Image
            src={perioniceImage}
            alt="Perionice Image"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>
        <div className="flex flex-col justify-between ml-6 h-[512px]">
          <div className="text-gray-500 mb-2 text-[18px]">
            12.07.2024 - 6 minuta čitanja
          </div>
          <h2 className="text-[40px] font-semibold text-fontColorGray leading-tight mb-16">
            Perionice za pse koje morate<br className="mb-0" />posetiti u 2024. godini
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-16">
            U današnje vreme, perionice za pse nude širok spektar usluga koje<br />mogu poboljšati zdravlje i izgled vašeg ljubimca. Od osnovnog pranja<br />do luksuznih tretmana, istražujemo najbolje perionice koje možete<br />posetiti ove godine. Ova lista će vam pomoći da pronađete savršenog<br />partnera za vašu četvoronožnu ljubimicu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perionice;

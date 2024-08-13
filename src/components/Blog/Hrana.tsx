import React from "react";
import Image from "next/image";
import hranaImage from "../../../public/assets/images/Blog/Hrana.png";

export default function Hrana() {
  return (
    <div className="flex justify-center py-4 mt-8">
      <div className="flex w-[76vw] max-w-[76vw]">
        <div className="relative w-[33.25vw] max-w-[33.25vw] h-[512px] overflow-hidden">
          <Image
            src={hranaImage}
            alt="Hrana Image"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>
        <div className="flex flex-col justify-between ml-6 h-[512px]">
          <div className="text-gray-500 mb-2 text-[18px]">
            13.07.2024 - 4 minuta čitanja
          </div>
          <h2 className="text-[40px] font-semibold text-fontColorGray leading-tight mb-16">
            Najbolja hrana za pse u 2024.<br className="mb-0" />preporuke i recenzije
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-16">
            Kvalitetna hrana za pse je ključna za zdravlje i vitalnost vašeg<br />ljubimca. Ova godina donosi nove brendove i proizvode koji obećavaju<br />da će poboljšati ishranu vašeg psa. U ovom članku, pregledavamo najbolje<br />opcije na tržištu, uključujući preporuke od veterinaraca i recenzije<br />korisnika.
          </p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import img from "@/../public/assets/images/Dresura/D2.png";
import Image from "next/image";

export default function BelowGray() {
  return (
    <div className="m-auto my-20 flex w-3/4 flex-col items-start space-x-10 md:flex-row xl:text-2xl">
      <Image alt="Dog image" src={img} height={400} />
      <div className="space-y-6">
        <h4 className="text-2xl font-bold">
          Vrste dresura za koje se možete opredeliti:
        </h4>
        <ul className="list-disc space-y-4 xl:ml-32">
          <li>
            Treninzi za vaspitanje i obuku štenaca koji su tek pristigli u vaš
            dom
          </li>
          <li>Socijalizacija pasa</li>
          <li>
            Trick trening koji vam omogućava da naučite vašeg psa da izvodi
            različite trikove
          </li>
          <li>
            Trening odbrane i napada za rase koje se uzgajaju da bi bili čuvari
            i pratioci
          </li>
          <li>Priprema pasa za izložbe</li>
          <li>
            Obuka za službene-policijske-vojne namene
          </li>
        </ul>
      </div>
    </div>
  );
}

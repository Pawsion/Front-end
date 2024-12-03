import Image from "next/image";
import React from "react";
import img from "@/../public/assets/images/Pansioni/P4.png";

export default function VrticiTwo() {
  return (
    <div className="space-y-16 md:space-y-6">
      <h3 className="font-bold font-RobotoSlab leading-tight xl:-mb-32">
        Šta uključuje boravak u vrtiću?
      </h3>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="space-y-8 md:space-y-10 xl:space-y-6 md:w-1/2">
          <p className="text-base md:text-2xl leading-relaxed">
            Boravak je potpuno prilagođen psima kako bi vreme
            <br /> koje ne provode sa vlasnicima proteklo što brže i
            <br /> zabavnije.
          </p>
          <p className="text-base leading-relaxed">
            Na ono što možete računati je <b>hranjenje,</b> najverovatnije
            <br /> jedan obrok, i to vašom hranom ili hranom pansiona
            <br /> ukoliko poseduje tu mogućnost.
          </p>
          <p className="text-base leading-relaxed">
            <b>Igra</b> sa drugim psima, igračkama, <b>maženje, istrčavanje,</b>
            <br /> popodnevna dremka, ponegde i kupanje u bazenu,
            <br /> svakako su sastavni deo jednog aktivnog psećeg dana.
          </p>
        </div>
        <Image alt="Dog image" src={img} className="w-full md:w-auto md:w-1/2" />
      </div>

      <p className="text-base leading-relaxed">
        Nadgledanje od strane obučenog osoblja kao i <b>eventualne usluge veterinara</b> su gotovo obavezne u cilju očuvanja zdravlja i bezbednosti vašeg psa. 
        U pojedinim vrtićima organizovan je i <b>prevoz ljubimaca</b> kako bi što više olakšali vaše obaveze.
      </p>
    </div>
  );
}

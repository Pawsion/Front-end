import Image from "next/image";
import React from "react";
import img from "@/../public/assets/images/Pansioni/PansioniSecond.png";

export default function BelowPurple() {
  return (
    <div className="space-y-10">
      <h4 className="mb-20 text-4xl font-bold text-fontColorPurple">
        Cene pansiona i hotela za pse po gradovima
      </h4>
      <p>Cene pansiona i hotela variraju i najčešće zavise:</p>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <ul className="list-disc">
          <li>od grade gde se pansion ili hotel nalazi</li>
          <li>od kvaliteta smestaja</li>
          <li>
            da li su dodatne usluge uključene u cenu (kupanje, šišanje,
            veterinar, video nadzor)
          </li>
          <li>
            da li će vaš ljubimac biti sam ili će boraviti zajedno sa drugim
            psima
          </li>
          <li>da li će biti smešten u boksu ili kućnim uslovima</li>
          <li>
            da li ćete ostaviti svoju hranu ili će ljubimac jesti pansionsku
          </li>
          <li>koliko dana ostaje (duži vremenski period je povoljniji)</li>
          <li>koliko pasa ostavljate (više ljubimaca povoljniji uslovi)</li>
        </ul>
        <Image alt="Dog image" src={img} height={300} />
      </div>

      <p>
        U <span className="font-bold">Beogradu</span> raspon cena kreće se od 15
        do 35e za dan, dok su cene u ostalim gradovima nešto niže:{" "}
        <span className="font-bold">Novi Sad</span> od 15 do 25e,{" "}
        <span className="font-bold">Subotica i Niš</span> od 10 do 20e.
      </p>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import descImg from "@/../public/assets/images/Pansioni/PansioniDescription.png";

export default function Description() {
  return (
    <div className="my-20 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-auto order-2 md:order-1">
        <Image
          src={descImg}
          alt="description image"
          className="w-full h-auto md:w-auto"
        />
      </div>

      <div className="w-full md:w-1/2 px-4 md:px-0 order-1 md:order-2 xl:space-y-10 space-y-6 text-base lg:text-2xl leading-relaxed">
        <p>
          Pansioni i hoteli za pse pružaju siguran i udoban prostor<br /> za pse,
          mesto gde oni borave od nekoliko sati do<br /> meseci, u zavisnosti da li su
          njihovi vlasnici na poslu,<br /> putovanju ili zauzeti drugim obavezama.
        </p>
        <h6>
          <b>Uloga pansiona i hotela za pse obuhvata:</b>
        </h6>
        <ul className="list-disc ml-6 sm:ml-10 md:ml-16 space-y-2">
          <li>pružanje hrane <i>(vlasničke ili pansionske)</i></li>
          <li>smeštaja <i>(unutra i napolju)</i></li>
          <li>fizičke aktivnosti <i>(dvorišta, poligoni, bazeni)</i></li>
          <li>socijalizacije sa ostalim psima</li>
          <li>veterinarsku negu <i>(po potrebi)</i></li>
          <li>praćenje ljubimaca <i>(video nadzor u pojedinim pansionima)</i></li>
        </ul>
      </div>
    </div>
  );
}

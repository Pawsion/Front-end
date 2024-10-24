import Image from "next/image";
import React from "react";
import descImg from "@/../public/assets/images/Pansioni/PansioniDescription.png";

export default function Description() {
  return (
    <div className="my-20 flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 ">
      <Image src={descImg} alt="description image" />
      <div className="space-y-10 md:w-1/2 text-2xl">
        <p>
          Pansioni i hoteli za pse pružaju siguran i udoban prostor<br /> za pse,
          mesto gde oni borave od nekoliko sati do<br /> meseci, u zavisnosti da li su
          njihovi vlasnici na poslu,<br /> putovanju ili zauzeti drugim obavezama.
        </p>
        <h6><b>Uloga pansiona i hotela za pse obuhvata:</b></h6>
        <ul className="list-disc ml-16">
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

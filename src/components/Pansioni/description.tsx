import Image from "next/image";
import React from "react";
import descImg from "@/../public/assets/images/Pansioni/PansioniDescription.png";

export default function Description() {
  return (
    <div className="my-20 flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
      <Image src={descImg} alt="description image" />
      <div className="space-y-10 md:w-1/2">
        <p>
          Pansioni i hoteli za pse pružaju siguran i udoban prostor za pse,
          mesto gde oni borave od nekoliko sati do meseci, u zavisnosti da li su
          njihovi vlasnici na poslu, putovanju ili zauzeti drugim obavezama.
        </p>
        <h6>Uloga pansiona i hotela za pse obuhvata:</h6>
        <ul className="list-disc">
          <li>pružanje hrane (vlasničke ili pansionske)</li>
          <li>smeštaja (unutra i napolju)</li>
          <li>fizičke aktivnosti (dvorišta, poligoni, bazeni)</li>
          <li>socijalizacije sa ostalim psima</li>
          <li>veterinarsku negu (po potrebi)</li>
          <li>praćenje ljubimaca (video nadzor u pojedinim pansionima)</li>
        </ul>
      </div>
    </div>
  );
}

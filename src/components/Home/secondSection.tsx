import React from "react";
import CorgiImage from "./Home2/corgiPicture";

export default function SecondSection() {
  return (
    <div className="flex min-h-[80vh]">
      <CorgiImage />
      <div className="flex flex-col justify-center p-4 lg:p-0">
        <h2 className="mt-30 text-6xl font-semibold text-fontColorPurple">
          Naš sajt pokriva najveće gradove Srbije i ovde možete pronaći :
        </h2>
        <ul
          className="custom-list m-auto mt-6 list-inside text-start font-OpenSans text-custom-sm
        font-semibold text-fontColorGray text-shadow-md lg:mx-0"
        >
          <li>Gde se nalaze pansioni i hoteli za pse</li>
          <li>Koje salone i frizere za pse možete da posetite</li>
          <li>Kome se obratiti za dresuru</li>
          <li>Gde se nalaze azili i prihvatilišta</li>
          <li>Raspored gradskih parkova</li>
          <li>Zanimljiva i cool imena za pse</li>
          <li>Razne savete vezano za ishranu i zdravlje ljubimaca</li>
        </ul>
      </div>
    </div>
  );
}

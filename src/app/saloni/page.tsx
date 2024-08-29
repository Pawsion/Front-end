"use client";

import Description from "@/components/Saloni/description";
import SaloniCard from "@/components/Saloni/saloniCard";
import SaloniSection from "@/components/Saloni/saloniSection";
import { SALONI_CARDS } from "@/utils/saloni-cards";
import { SALONI_DATA } from "@/utils/saloni-data";
import { useState } from "react";

export default function Saloni() {
  const [saloniSections] = useState(SALONI_DATA);
  const [saloniCards] = useState(SALONI_CARDS);

  return (
    <div className=" flex-col space-y-20 pt-20">
      <h1 className="m-auto flex w-3/4 justify-center text-center text-5xl">
        Saloni i frizeri za pse - najveća lista za gradove Srbije
      </h1>
      <Description />
      <div>
        {saloniSections.map((el, index) => (
          <div key={el.title} className={index % 2 ? "" : "bg-pageColorTan"}>
            <SaloniSection
              title={el.title}
              description={el.description}
              description2={el.description2}
              image={el.image}
            />
          </div>
        ))}
      </div>
      <div className="m-auto grid w-3/4 grid-cols-1 gap-10 md:grid-cols-2">
        {/* //! TODO -> add CITY in type and data and then filter first by city. Should use useState selectedCity with button */}
        {saloniCards.map((el) => (
          <SaloniCard
            key={el.name}
            name={el.name}
            address={el.address}
            phone={el.phone}
            site={el.site}
          />
        ))}
      </div>
    </div>
  );
}

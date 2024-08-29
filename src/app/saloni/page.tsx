"use client";

import Description from "@/components/Saloni/description";
import SaloniSection from "@/components/Saloni/saloniSection";
import { SALONI_DATA } from "@/utils/saloni-data";
import { useState } from "react";

export default function Saloni() {
  const [saloniSections, setsaloniSections] = useState(SALONI_DATA);

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
    </div>
  );
}

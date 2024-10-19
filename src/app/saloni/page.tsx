"use client";

import Description from "@/components/Saloni/description";
import SaloniCard from "@/components/Saloni/saloniCard";
import SaloniSection from "@/components/Saloni/saloniSection";
import { SALONI_CARDS } from "@/utils/saloni-cards"; // Ensure this imports your SALONI_CARDS
import { SALONI_DATA } from "@/utils/saloni-data";
import { useState, useRef } from "react";
import PagesFirstSection from "@/components/Reusable/pages-first-section";
import saloniImage from "@/../public/assets/images/Saloni/Background.png";
import { SALONI_HEADER } from "@/utils/pages-headers";

export default function Saloni() {
  const [saloniSections] = useState(SALONI_DATA);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
  // Create a ref for the h2 element
  const cityHeaderRef = useRef<HTMLHeadingElement | null>(null);

  const LOCATIONS = [
    "beograd",
    "novi_beograd",
    "zemun",
    "novi_sad",     
    "niš",
    "kragujevac",
    "subotica",
    "smederevo"
  ];

  const handleLocationClick = (location: string) => {
    console.log("Selected location:", location);
    setSelectedCity(location);
    setTimeout(() => {
      if (cityHeaderRef.current) {
        cityHeaderRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="flex-col space-y-20">
      <PagesFirstSection title={SALONI_HEADER} bgImage={saloniImage} />
      <Description />
      <div>
        {saloniSections.map((el, index) => (
          <div key={el.title} className={index % 2 ? "" : "bg-pageColorTan"}>
            <SaloniSection
              title={el.title}
              description={el.description}
              description2={el.description2}
              image={el.image}
              buttonLabels={index === saloniSections.length - 1 ? LOCATIONS : []}
              onButtonClick={handleLocationClick}
            />
          </div>
        ))}
      </div>

      {selectedCity && (
        <h2 ref={cityHeaderRef} className="text-center md:text-left md:ml-64">
          Saloni i frizeri za pse {selectedCity.replace("_", " ").replace(/(?:^|\s)\S/g, a => a.toUpperCase())}
        </h2>
      )}

      {selectedCity && (
        <div className="m-auto grid w-3/4 grid-cols-1 gap-10 md:grid-cols-2">
          {SALONI_CARDS[selectedCity]?.saloni.map((el) => (
            <div className="flex justify-center md:justify-start" key={el.name}>
              <SaloniCard
                name={el.name}
                address={el.address}
                phone={el.phone}
                site={el.site}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

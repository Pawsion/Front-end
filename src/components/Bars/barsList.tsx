"use client";
import React, { useState } from "react";
import Card from "../Reusable/cards";
import BarButton from "./barsButton";
import { BARS_LOCATIONS } from "@/utils/barsLocations-data";

interface BarData {
  name: string;
  website: string;
  address: string;
  phone: string;
}

const LOCATIONS = [
  "Vračar",
  "Stari grad",
  "Savski venac",
  "Novi Beograd",
  "Voždovac",
  "Banovo brdo",
  "Zvezdara",
  "Dorćol",
  "Zemun"
];

const BarsList: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const handleButtonClick = (location: string) => {
    setActiveLocation(location === activeLocation ? null : location);
  };

  const filteredBars = activeLocation ? BARS_LOCATIONS[activeLocation] || [] : [];

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-[64px] ml-4 font-regular text-fontColorBlack text-left leading-none mb-24">
          Lista “pet friendly” restorana u Beogradu za 2024. godinu:
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {LOCATIONS.map((location, index) => (
          <BarButton
            key={index}
            location={location}
            isActive={activeLocation === location}
            onClick={() => handleButtonClick(location)}
          />
        ))}
      </div>

      <div className="ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBars.length > 0 ? (
            filteredBars.map((item: BarData, index: number) => (
              <Card
                key={index}
                name={item.name}
                website={item.website}
                address={item.address}
                phone={item.phone}
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarsList;

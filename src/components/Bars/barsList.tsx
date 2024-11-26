"use client";
import React, { useState } from "react";
import Card from "../Reusable/cards";
import BarButton from "./barsButton";
import { BARS_LOCATIONS } from "@/utils/barsLocations-data";
import SaloniCard from "../Saloni/saloniCard";

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
    <div className="px-2">
      <div className="mb-16 mt-16 tracking-tightest ">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab font-bold">
          Lista “pet friendly” restorana u Beogradu za<span className="hidden sm:inline"><br /></span> 2024. godinu:
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 transition-all duration-300 ease-in-out ${
            activeLocation ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {filteredBars.length > 0 ? (
            filteredBars.map((item: BarData, index: number) => (
              <SaloniCard
                key={index}
                name={item.name}
                site={item.website}
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

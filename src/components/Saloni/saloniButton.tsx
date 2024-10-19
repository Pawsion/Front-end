"use client";
import React, { useState } from "react";

interface SaloniButtonProps {
  locations: string[];
  onButtonClick: (location: string) => void;
}

const SaloniButton: React.FC<SaloniButtonProps> = ({ locations, onButtonClick }) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const handleButtonClick = (location: string) => {
    setActiveLocation(location);
    onButtonClick(location);
  };

  const formatLocation = (location: string) => {
    return location.replace("_", " ").replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {locations.map((location) => (
        <button
          key={location}
          className={`w-[359px] h-[48px] text-white text-2xl font-semibold rounded-[50px] transition duration-300 ${
            activeLocation === location ? "bg-mainColorBlue" : "bg-mainColorTan"
          }`}
          onClick={() => handleButtonClick(location)}
        >
          {formatLocation(location)}
        </button>
      ))}
    </div>
  );
};

export default SaloniButton;

import React from "react";
import { PARK_DATA, Park } from "@/utils/parkLocations"; 
import Image from 'next/image'; 

const ParkPictures: React.FC = () => {
  const belgradeParks = PARK_DATA.filter((park: Park) => park.city === "Belgrade");
  const noviSadParks = PARK_DATA.filter((park: Park) => park.city === "Novi Sad");

  return (
    <div className="mt-8 px-4">
      <p className="text-[28px] mb-32">
        Kako ne biste trošili vreme na traženje, već na igranje sa vašim mezimcem,
        u nastavku smo vam napravili listu parkova u Beogradu i Novom Sadu:
      </p>
      <h1 className="text-[64px] mb-16">Beograd</h1>
      <div className="grid grid-cols-1 gap-8">
        {belgradeParks.map((park: Park, index: number) => (
          <div key={index} className={`mb-8 ${park.image ? 'pb-4' : ''}`}>
            <h2 className="text-[28px] font-bold mb-4">{index + 1}. {park.name}</h2>
            {park.image && (
              <div className="relative w-[1440px] h-[560px] mb-4">
                <Image
                  src={park.image}
                  alt={park.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {park.source && <p className="text-[16px]">Izvor: {park.source}</p>}
          </div>
        ))}
      </div>
      <h1 className="text-[64px] mb-16">Novi Sad</h1>
      <div className="grid grid-cols-1 gap-8">
        {noviSadParks.map((park: Park, index: number) => (
          <div key={index} className={`mb-8 ${park.image ? 'pb-4' : ''}`}>
            <h2 className="text-[28px] font-bold mb-4">{index + 1}. {park.name}</h2>
            {park.image && (
              <div className="relative w-[1440px] h-[560px] mb-4">
                <Image
                  src={park.image}
                  alt={park.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {park.source && <p className="text-[16px]">Izvor: {park.source}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkPictures;

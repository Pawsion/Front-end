import React from "react";
import { PARK_DATA, Park } from "@/utils/parkLocations"; 
import Image from "next/image"; 

const ParkPictures: React.FC = () => {
  const belgradeParks = PARK_DATA.filter((park: Park) => park.city === "Belgrade");
  const noviSadParks = PARK_DATA.filter((park: Park) => park.city === "Novi Sad");

  return (
    <div className="mt-8 px-4 lg:w-3/4">
      <p className="text-2xl mb-32 -ml-8">
        Kako ne biste trošili vreme na traženje, već na igranje sa vašim mezimcem,
        u nastavku smo vam napravili listu parkova u <b>Beogradu i Novom Sadu:</b>
      </p>

      <h1 className="mb-16 text-4xl sm:text-5xl lg:text-6xl">Beograd</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        {belgradeParks.map((park: Park, index: number) => (
          <div key={index} className={`mb-8 ${park.image ? 'pb-4' : ''}`}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{index + 1}. {park.name}</h3>
            {park.image && (
              <div className="relative max-w-[1400px] h-[250px] sm:h-[350px] lg:h-[500px] mb-4">
                <Image
                  src={park.image}
                  alt={park.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {park.source && <p className="text-base sm:text-lg">{park.source}</p>}
          </div>
        ))}
      </div>

      <h1 className="mb-16 text-4xl sm:text-5xl lg:text-6xl">Novi Sad</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        {noviSadParks.map((park: Park, index: number) => (
          <div key={index} className={`mb-8 ${park.image ? 'pb-4' : ''}`}>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{index + 1}. {park.name}</h2>
            {park.image && (
              <div className="relative max-w-[1400px] h-[250px] sm:h-[350px] lg:h-[500px] mb-4">
                <Image
                  src={park.image}
                  alt={park.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {park.source && <p className="text-base sm:text-lg">{park.source}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkPictures;

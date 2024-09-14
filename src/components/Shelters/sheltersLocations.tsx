import React from 'react';
import Image from 'next/image';
import Card from '../Reusable/cards';
import { SHELTERS_LOCATIONS } from '@/utils/shelterLocations-data';

const SheltersLocations: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mb-4 ml-64">
        <h1 className="text-[64px] font-regular text-fontColorBlack text-left leading-none">
          Azili i prihvatilišta za pse u Beogradu
        </h1>
      </div>
      <div className="ml-64 w-full max-w-[1700px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SHELTERS_LOCATIONS.map((shelter, index) => (
            <Card
              key={index}
              name={shelter.name}
              website={shelter.website}
              address={shelter.address}
              phone={shelter.phone}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ml-64">
        <h1 className="text-[64px] font-regular text-fontColorBlack text-left leading-none">
          Azili i prihvatilišta za pse u Novom Sadu
        </h1>
      </div>
    </div>
  );
};

export default SheltersLocations;

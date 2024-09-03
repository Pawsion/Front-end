import React from 'react';
import Image from 'next/image';
import topBulletImage from "../../../public/assets/images/Shelters/topBullet.png"
import { SHELTERS_LOCATIONS } from '@/utils/shelterLocations-data';

const ShelterCard: React.FC<{ shelter: typeof SHELTERS_LOCATIONS[0] }> = ({ shelter }) => {
    return (
      <div className="relative p-4 mb-4">
        <div className="absolute">
          <Image
            src={topBulletImage}
            alt="Top Bullet"
            width={213}
            height={17}
          />
        </div>
  
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-mainColorBlue">{shelter.name}</h2>
          <p className="text-gray-600 mb-1">
          Sajt: <a href={`http://${shelter.website}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{shelter.website}</a>
          </p>
          <p className="text-gray-600 mb-1">
          Adresa:{shelter.address}
          </p>
          <p className="text-gray-600">
          Tel: {shelter.phone}
          </p>
        </div>
      </div>
    );
  };
  
  export default function SheltersLocations() {
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
              <ShelterCard key={index} shelter={shelter} />
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
  }

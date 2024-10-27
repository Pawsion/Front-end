import React from 'react';
import Image from 'next/image';
import topBulletImage from "../../../public/assets/images/Shelters/topBullet.png";

interface CardProps {
  name: string;
  website: string;
  address: string;
  phone: string;
}

const Card: React.FC<CardProps> = ({ name, website, address, phone }) => {
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
        <h2 className="text-xl font-OpenSans font-bold mb-2 text-mainColorBlue">{name}</h2>
        <p className="text-fontColorGray mb-1">
          Sajt: {website ? (
            <a
              href={`http://${website}`}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          ) : "N/A"}
        </p>
        <p className="text-fontColorGray mb-1">Adresa: {address}</p>
        <p className="text-fontColorGray">Tel: {phone}</p>
      </div>
    </div>
  );
};

export default Card;

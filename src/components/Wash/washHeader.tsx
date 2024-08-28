import React from 'react';
import Image from 'next/image';
import blogImage from "../../../public/assets/images/Wash/Header.png";
import WashPros from './washPros';
import WashLocations from './washLocations';

export default function WashHeader() {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mb-4 ml-64">
        <h1 className="text-[100px] font-regular text-fontColorBlack text-left mt-16 leading-none">
          <span>Samouslužne perionice za pse - <br />gde i kako okupati psa </span>
        </h1>
        <div className="text-gray-500 mt-8 text-[24px]">
          11.07.2024 - 5 minuta čitanja
        </div>
      </div>

      <div className="relative w-[1440px] mt-2 ml-64">
        <div className="relative h-[512px] w-full">
          <Image
            src={blogImage}
            alt="Wash Dog Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="mb-32 ml-64 mt-16 text-[28px] font-openSans font-regular">
        <p>Samouslužne perionice su sve više popularne među vlasnicima pasa i nalaze se u svim većim gradovima Srbije.<br /> Uglavnom su slično opremljene, a ono što ih razlikuje je raspon cene i radnih sati.</p>
      </div>

      <div className="mb-4 ml-64">
        <h1 className="text-[64px] font-regular text-fontColorBlack text-left leading-none">Koje su prednosti samouslužne perionice?</h1>
      </div>
      <WashPros />
      <WashLocations />
    </div>
  );
}

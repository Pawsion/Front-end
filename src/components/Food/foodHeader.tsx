import React from 'react';
import Image from 'next/image';
import blogImage from "../../../public/assets/images/Food/Header.png";
import FoodContent from '@/components/Food/foodContent';
import SoftOrRegular from './softOrRegular';
import BestFood from './bestFood';
import FoodList from './foodList';

export default function FoodHeader() {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mb-4 ml-64">
        <h1 className="text-[100px] font-regular text-fontColorBlack text-left mt-16 leading-none">
          <span>Кako izabrati najbolju hranu za<br />pse - Lista brendova za 2024.</span>
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

      <div className="mb-16 ml-64 mt-8 text-[28px] font-openSans font-regular">
        <p className="mb-16">Ovo je vreme kada su psi, naši najbolji prijatelji postali članovi porodice, a samim tim se i njihova ishrana<br /> popela za letvicu više. </p>
        <p className="mb-16">Promena u kvalitetu života dovela je do nicanja mnoštva brendova i vrsta hrane za pse, ostavivši vlasnike u<br /> nedoumici koja je hrana najbolja za njihove krznene prijatelje. </p>
        <p>Budući da je sve veći broj vas koji želite sami da pravite hranu za svog ljubimca, potrudićemo se da vam<br /> pružimo informacije i na tu temu.</p>
      </div>

      <FoodContent />
      <SoftOrRegular />
      <BestFood />
      <FoodList />
    </div>
  );
}

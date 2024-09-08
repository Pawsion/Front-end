import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function NamesTips() {
  return (
    <div className="mb-32 ml-64 mt-16 text-[28px] font-openSans font-regular">
    <div>
    <h1 className="text-[64px] ml-4 font-regular text-fontColorBlack text-left leading-none mb-24">
        Saveti za davanje imena psima
        </h1>
    </div>
      <ul className="ml-16">
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Preporučljivo je da se ime sastoji od jednog ili dva sloga i da ne bude komplikovano za izgovor. Kraća imena su lakša za izgovor, a kada su u kombinaciji sa naredbom, omogućuju bržu komunikaciju sa psom.</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Ime ne bi trebalo da zvuči previše slično bilo kojoj naredbi koju planirate da koristite, jer će to zbuniti psa. Na primer "Neo" može zvučati kao "Ne".</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Izbegavajte imena koja imaju negativne konotacije. Uvek prvo zamislite kako biste se osećali dok dozivate vašeg psa na javnom prostoru pred drugim ljudima.</span>
        </li>
      </ul>
    </div>
  );
}

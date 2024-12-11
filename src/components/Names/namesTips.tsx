import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function NamesTips() {
  return (
    <div className="xl:mb-16 mb-4 px-4 lg:ml-64 text-base sm:text-lg lg:text-2xl font-openSans font-regular lg:w-3/4">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-regular text-fontColorBlack text-left mb-8 lg:mb-16">
        Saveti za davanje imena psima
      </h2>
      <ul className="list-none ml-4 sm:ml-8 mb-8">
        <li className="mb-6 lg:mb-8 flex items-start leading-relaxed">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-4 sm:mr-6 mt-1 sm:mt-2 h-5 w-5 sm:h-6 sm:w-6"
          />
          <span>
            Preporučljivo je da se ime <b>sastoji od jednog ili dva sloga</b> i da ne bude komplikovano za izgovor.
            
            Kraća imena su lakša za izgovor, a kada su u kombinaciji sa naredbom, omogućuju bržu
            
            komunikaciju sa psom.
          </span>
        </li>
        <li className="mb-6 lg:mb-8 flex items-start leading-relaxed">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-4 sm:mr-6 mt-1 sm:mt-2 h-5 w-5 sm:h-6 sm:w-6"
          />
          <span>
            Ime <b>ne bi trebalo da zvuči previše slično bilo kojoj naredbi</b> koju planirate da koristite, jer će to
            
            zbuniti psa. Na primer, &quot;Neo&quot; može zvučati kao &quot;Ne&quot;.
          </span>
        </li>
        <li className="mb-6 lg:mb-8 flex items-start leading-relaxed">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-4 sm:mr-6 mt-1 sm:mt-2 h-5 w-5 sm:h-6 sm:w-6"
          />
          <span>
            Izbegavajte imena koja imaju <b>negativne konotacije.</b> Uvek prvo zamislite kako biste se osećali dok
            
            dozivate vašeg psa na javnom prostoru pred drugim ljudima.
          </span>
        </li>
      </ul>
    </div>
  );
}

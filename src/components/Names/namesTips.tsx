import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function NamesTips() {
  return (
    <div className="font-openSans mb-32 ml-64 mt-16 text-[28px] font-regular">
      <div>
        <h1 className="mb-24 ml-4 text-left text-[64px] font-regular leading-none text-fontColorBlack">
          Saveti za davanje imena psima
        </h1>
      </div>
      <ul className="ml-16">
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-1 h-6 w-6"
          />
          <span>
            Preporučljivo je da se ime sastoji od jednog ili dva sloga i da ne
            bude komplikovano za izgovor. Kraća imena su lakša za izgovor, a
            kada su u kombinaciji sa naredbom, omogućuju bržu komunikaciju sa
            psom.
          </span>
        </li>
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-1 h-6 w-6"
          />
          <span>
            Ime ne bi trebalo da zvuči previše slično bilo kojoj naredbi koju
            planirate da koristite, jer će to zbuniti psa. Na primer
            &quot;Neo&quot; može zvučati kao &quot;Ne&quot;.
          </span>
        </li>
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-1 h-6 w-6"
          />
          <span>
            Izbegavajte imena koja imaju negativne konotacije. Uvek prvo
            zamislite kako biste se osećali dok dozivate vašeg psa na javnom
            prostoru pred drugim ljudima.
          </span>
        </li>
      </ul>
    </div>
  );
}

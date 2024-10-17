import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function NamesTips() {
  return (
    <div className="font-openSans mb-16 ml-64 text-2xl font-regular">
      <div>
        <h2 className="mb-16 ml-4 text-left text-6xl font-regular leading-none text-fontColorBlack">
          Saveti za davanje imena psima
        </h2>
      </div>
      <ul className="ml-16">
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-3 h-6 w-6"
          />
          <span>
          Preporučljivo je da se ime <b>sastoji od jednog ili dva sloga</b> i da ne bude komplikovano za izgovor.<br />
          Kraća imena su lakša za izgovor, a kada su u kombinaciji sa naredbom, omogućuju bržu<br />
          komunikaciju sa psom.
          </span>
        </li>
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-3 h-6 w-6"
          />
          <span>
            Ime <b>ne bi trebalo da zvuči previše slično bilo kojoj naredbi</b> koju planirate da koristite, jer će to<br />
             zbuniti psa. Na primer &quot;Neo&quot; može zvučati kao &quot;Ne&quot;.
          </span>
        </li>
        <li className="mb-8 flex items-start">
          <Image
            src={pawBullet}
            alt="Paw Bullet"
            className="mr-8 mt-3 h-6 w-6"
          />
          <span>
            Izbegavajte imena koja imaju <b>negativne konotacije.</b> Uvek prvo zamislite kako biste se osećali dok<br />
            dozivate vašeg psa na javnom prostoru pred drugim ljudima.
          </span>
        </li>
      </ul>
    </div>
  );
}

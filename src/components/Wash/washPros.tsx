import React from 'react';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function WashPros() {
  return (
    <div className="relative mb-32 mt-16 text-base sm:text-lg  font-openSans font-regular px-4 lg:w-3/4">
      <ul className="space-y-6 sm:space-y-8 lg:space-y-12 lg:ml-64">
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Vlasnici ne prljaju svoje kupatilo i ne moraju da se zamaraju čišćenjem dlaka.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Radno vreme je uglavnom NON-STOP i nema potrebe za zakazivanjem.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Voda je nameštena na 36°C, što je idealna temperatura za naše ljubimce.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Dovoljno je da ponesete samo peškir, a ponegde ni njega.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Na raspolaganju su vam šamponi i balzami za kupanje pasa.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Perionice su opremljene kvalitetnim fenom za sušenje dlake u sklopu mašine.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Kupanje je jednostavno i brzo, traje od 10-20 min u zavisnosti od veličine psa.</span>
        </li>
        <li className="flex items-start">
          <img src={pawBullet.src} alt="Paw Bullet" className="w-6 h-6 mr-4 mt-1" />
          <span className="text-base sm:text-lg ">Cena 1 min se kreće od 50-100 dinara u zavisnosti od perionice.</span>
        </li>
      </ul>
    </div>
  );
}

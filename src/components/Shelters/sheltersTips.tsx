import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function SheltersTips() {
  return (
    <div className="mb-32 ml-64 mt-16 text-[28px] font-openSans font-regular">
      <ul className="ml-8">
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Uverite se da vaš ljubimac uvek nosi ogrlicu sa priveskom koja sadrži vaše ime, adresu, broj telefona i ime vašeg ljubimca.</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Čipujte vaše ljubimce - ovaj mali čip sadrži jedinstveni identifikacioni broj koji može pomoći službenicima da vas kontaktiraju ako pronađu vašeg ljubimca.</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-6 h-6 mr-8 mt-1" />
          <span>Koristite GPS ogrlice - uz pomoć ogrlice i aplikacije videćete na mapi gde se nalazi vaš pas.</span>
        </li>
      </ul>
    </div>
  );
}

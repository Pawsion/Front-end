import React from 'react';
import Image from 'next/image';
import blogImage from "../../../public/assets/images/Citat/citatDog.png";

export default function CitatiHeader() {
  return (
    <div className="relative h-screen flex flex-col items-start p-4">
      <div className="mb-4 ml-64">
        <h1 className="text-[100px] font-regular text-fontColorBlack text-left mt-16 leading-none">
          <span>101 </span>
          <span className="font-Bogart leading-tight">citat o psima koji će dotaći<br />srce svakog vlasnika</span>
        </h1>
        <div className="text-gray-500 mt-8 text-[24px]">
          11.07.2024 - 5 minuta čitanja
        </div>
      </div>
    
      <div className="relative w-full w-[1440px] mt-2 ml-64">
        <div className="relative h-[512px] w-full">
          <Image
            src={blogImage}
            alt="Citat Dog Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="mb-4 ml-64 mt-16 text-[28px] font-openSans font-regular">
      <p>Psi su postali neizostavan deo naših domova, ali i naših srca. Citati o psima nas podsećaju na tu snažnu, nera-<br />skidivu vezu koju delimo s našim ljubimcima i zato uvek volimo da ih čitamo. Oni nas <b>podsećaju na važnost<br /> saosećanja, vernosti i prijateljstva,</b> svega onog što psi simbolizuju.<br /><br />Neka vas čitanje inspiriše da cenite svaki trenutak proveden sa čupavim vragolanima. Uživajte!
      </p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import blogImage from "../../../public/assets/images/Blog/Azili.png";

export default function Azili() {
  return (
    <div className="flex justify-center py-4 mt-8">
      <div className="flex w-[76vw] max-w-[76vw]">
        <div className="relative w-[33.25vw] max-w-[33.25vw] h-[512px] overflow-hidden rounded-l-[50px]">
          <Image
            src={blogImage}
            alt="Azili Image"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>
        <div className="flex flex-col justify-between ml-6 h-[512px]">
          <div className="text-gray-500 mb-2 text-[18px]">
            11.07.2024 - 5 minuta čitanja
          </div>
          <h2 className="text-[40px] font-semibold text-fontColorGray leading-tight mb-16">
            Azili
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-16">
            Psi su postali neizostavan deo naših domova, ali i naših srca.<br />Citati o psima nas podsećaju na tu snažnu, neraskidivu vezu<br />koju delimo s našim ljubimcima i zato uvek volimo da ih čita-<br />mo. Oni nas podsećaju na važnost saosećanja, vernosti i<br />prijateljstva, svega onog što psi simbolizuju.
          </p>
        </div>
      </div>
    </div>
  );
}

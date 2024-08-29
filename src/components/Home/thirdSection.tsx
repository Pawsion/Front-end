import React from "react";
import dogImage from "@/../public/assets/images/Homescreen3/dog.png";
import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center space-y-10 px-4 ">
      <h3 className="text-6xl font-bold text-mainColorBlue">
        Želite da rezervišete pansion online?
      </h3>
      <p>
        Ulogujte se i uz nekoliko klikova pronađite odgovarajući smeštaj za svog
        mezimca!
      </p>
      <p>
        Uskoro aplikacija za Android i iOS! Saznajte više o aplikaciji
        <a href=""> ovde.</a>
      </p>
      <button
        className="mt-12 rounded-[50px] bg-mainColorPurple px-14 py-4
      text-[24px] font-semibold text-white"
      >
        ULOGUJ SE!
      </button>

      {/* // ! TODO -> this should be 1 image TOGETHER with shadow  */}
      <Image src={dogImage} alt="Dog" className="mb-0 pb-0" />
    </div>
  );
}

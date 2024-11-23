import { SaloniCardType } from "@/utils/types";
import React from "react";

export default function SaloniCard({
  name,
  site,
  address,
  phone,
}: SaloniCardType) {
  return (
    <div className="w-full md:w-1/2 border-t-8 border-t-mainColorBlue text-fontColorGray p-6 md:p-8 space-y-4 lg:space-y-6">
      <h5 className="font-bold text-mainColorPurple text-lg md:text-2xl lg:text-[28px] leading-normal md:leading-relaxed lg:leading-loose">
        {name}
      </h5>
      <h6
        className="relative text-sm md:text-lg lg:text-[28px] leading-normal md:leading-relaxed lg:leading-loose truncate overflow-hidden whitespace-nowrap group"
      >
        Sajt: 
        <span
          className="ml-2 cursor-pointer"
          title={site}
        >
          {site}
        </span>
        <div className="absolute hidden w-max max-w-xs px-2 py-1 text-sm text-white bg-black rounded shadow-lg group-hover:block">
          {site}
        </div>
      </h6>
      <h6 className="text-sm md:text-lg lg:text-[28px] leading-normal md:leading-relaxed lg:leading-loose">
        Adresa: {address}
      </h6>
      <h6 className="text-sm md:text-lg lg:text-[28px] leading-normal md:leading-relaxed lg:leading-loose">
        Tel: {phone}
      </h6>
    </div>
  );
}

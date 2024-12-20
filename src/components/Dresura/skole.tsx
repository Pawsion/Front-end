import { SaloniCardType } from "@/utils/types";
import React from "react";

export default function DogSchoolsCard({
  name,
  site,
  address,
  phone,
}: SaloniCardType) {
  return (
    <div className="w-1/2 border-t-8 border-t-mainColorBlue xl:text-2xl text-fontColorGray">
      <h5 className="font-bold text-mainColorPurple">{name}</h5>
      <h6>
        Sajt: <a href={site} target="_blank" rel="noopener noreferrer">{site}</a>
      </h6>
      <h6>Adresa: {address}</h6>
      <h6>Tel: {phone}</h6>
    </div>
  );
}

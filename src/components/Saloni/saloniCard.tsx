import { SaloniCardType } from "@/utils/types";
import React from "react";

export default function SaloniCard({
  name,
  site,
  address,
  phone,
}: SaloniCardType) {
  return (
    <div className="w-1/2 border-t-8 border-t-mainColorBlue xl:text-2xl">
      <h5 className="font-bold text-mainColorPurple">{name}</h5>
      <h6>Sajt: {site}</h6>
      <h6>Adresa: {address}</h6>
      <h6>Tel: {phone}</h6>
    </div>
  );
}

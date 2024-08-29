import { SaloniCardType } from "@/utils/types";
import React from "react";

export default function SaloniCard({
  name,
  site,
  address,
  phone,
}: SaloniCardType) {
  return (
    <div className="w-1/2 border-t-4 border-t-mainColorBlue">
      <h5>{name}</h5>
      <h6>Sajt: {site}</h6>
      <h6>Adresa: {address}</h6>
      <h6>Tel: {phone}</h6>
    </div>
  );
}

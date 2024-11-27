import { SaloniCardType } from "@/utils/types";
import React from "react";
import SaloniCard from "../Saloni/saloniCard";

export default function DresuraPoGradu({
  city,
  data,
}: {
  city: string;
  data: SaloniCardType[];
}) {
  return (
    <div className="my-20 space-y-10">
      <div className="bg-fontColorPurple">
        <h3 className="m-auto w-11/12 sm:w-3/4 py-8 sm:py-12 text-3xl sm:text-5xl text-white text-left sm:text-left">
        Škole za obuku pasa u {city}
        </h3>
      </div>
      <div className="m-auto w-3/4 space-y-10 text-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {data.map((el) => (
            <SaloniCard
              key={el.name}
              name={el.name}
              address={el.address}
              phone={el.phone}
              site={el.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

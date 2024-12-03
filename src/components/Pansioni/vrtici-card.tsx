import React from "react";
import SaloniCard from "../Saloni/saloniCard";
import { vrticiData } from "@/utils/vrtici-data";

export default function VrticiPoGradu({
  city,
}: {
  city: string;
}) {
  const data = vrticiData[city.toLowerCase().replace(' ', '_')] || [];

  return (
    <div className="xl:my-20 space-y-10">
      <div className="bg-fontColorPurple">
        <h2 className="m-auto mt-4 w-3/4 py-12 font-RobotoSlab text-white">
          {city}
        </h2>
      </div>
      <div className="m-auto w-3/4 space-y-10 text-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.length > 0 ? (
            data.map((el) => (
              <SaloniCard
                key={el.name}
                name={el.name}
                address={el.address}
                phone={el.phone}
                site={el.site}
              />
            ))
          ) : (
            <p className="col-span-2 text-left">Nema dostupnih podataka za grad {city}.</p>
          )}
        </div>
      </div>
    </div>
  );
}

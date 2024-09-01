import { SaloniCardType } from "@/utils/types";
import React from "react";
import SaloniCard from "../Saloni/saloniCard";

export default function PansioniPoGradu({
  city,
  data,
}: {
  city: string;
  data: SaloniCardType[];
}) {
  return (
    <div className="my-20 space-y-10">
      <div className="bg-fontColorPurple">
        <h3 className=" m-auto w-3/4 p-6 text-3xl text-white">
          Pansioni i hoteli za pse - čuvanje pasa {city}
        </h3>
      </div>
      <div className="m-auto w-3/4 space-y-10">
        <p>
          Beograd ima najveću i najraznovrsniju ponudu pansiona i hotela za pse,
          što je i logično ako se u obzir uzme broj stanovnika i njihovih
          ljubimaca na toj teritoriji.
        </p>

        <p>
          Usluge i cene se razlikuju u zavisnosti od kvaliteta smeštaja, a mnogi
          pored smeštaja pružaju salonske i veterinarske usluge. U ponudi je
          čuvanje pasa od nekoliko sati dnevno do nekoliko meseci.
        </p>
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

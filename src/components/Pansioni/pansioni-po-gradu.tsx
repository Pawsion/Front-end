import React from "react";
import SaloniCard from "../Saloni/saloniCard";
import { pansioniData } from "@/utils/pansioni-data";

export default function PansioniPoGradu({
  city,
}: {
  city: string;
}) {
  const data = pansioniData[city.toLowerCase().replace(' ', '_')] || []; 

  return (
    <div className="my-20 space-y-10">
      <div className="bg-fontColorPurple">
        <h3 className="m-auto w-3/4 py-12 text-5xl text-white">
          Pansioni i hoteli za pse - čuvanje pasa {city}
        </h3>
      </div>
      <div className="m-auto w-3/4 space-y-10 text-2xl">
        {city.toLowerCase() === "beograd" && (
          <>
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
          </>
        )}
        
        {city.toLowerCase() === "novi sad" && (
          <p>
            Novi Sad ima nekoliko pansiona i hotela koji nude kvalitetnu brigu o psima, a izbor varira od osnovnih do luksuznih usluga.
          </p>
        )}
        
        {city.toLowerCase() === "subotica" && (
          <>
            <h3 className="text-3xl">Subotica ima najskromniju ponudu pansiona za kućne ljubimce od pomenutih gradova.</h3>
          </>
        )}

        {city.toLowerCase() === "niš" && (
          <>
            <h3 className="text-3xl">Niš ima skromnu ponudu kada je u pitanju broj pansiona za kućne ljubimce, ali s obzirom na veličinu grada, ova ponuda će u narednim godinama neosporno rasti.</h3>
          </>
        )}

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
            <p className="col-span-2 text-center">Nema dostupnih podataka za grad {city}.</p>
          )}
        </div>
      </div>
    </div>
  );
}

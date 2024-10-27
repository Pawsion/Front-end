import React from "react";

export default function Gray() {
  return (
    <div className="bg-pageColorTan py-20 xl:text-2xl">
      <div className="m-auto w-3/4 space-y-10">
        <h6 className="font-bold">Razlozi za pohađanje obuke sa psom: </h6>
        <ul className="list-disc space-y-4 xl:ml-32">
          <li>
            Provođenje zajedničkog vremena povećava nivo poverenja i jača vezu
            psa i vlasnika
          </li>
          <li>
            Olakšava život i smanjuje stres kod kuće kada su određena ponašanja
            pod kontrolom. (Da li vaš pas često pravi nered? Da li morate da se
            izvinjavate prijateljima dok vaš uzbuđeni pas skače da ih pozdravi?)
            Obuka može pomoći u rešavanju takvog ponašanja.
          </li>
          <li>
            Poboljšava komunikaciju sa psom i daje priliku da bolje upoznate
            njegovu ličnost
          </li>
        </ul>
      </div>
    </div>
  );
}

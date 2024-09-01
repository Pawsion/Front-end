import React from "react";

export default function PurpleList() {
  return (
    <div className="space-y-10 ">
      <h3 className="font-bold ">
        Ovo je najveća lista pansiona i hotela za pse u Srbiji za 2024. godinu.
      </h3>

      <ul className="list-disc space-y-6 rounded-3xl bg-gray-200 px-20 py-6 font-semibold text-fontColorPurple">
        <li>Cene pansiona i hotela za pse po gradovima</li>
        <li>Pansioni i hoteli za pse - čuvanje pasa Beograd</li>
        <li>Pansioni i hoteli za pse - čuvanje pasa Novi sad</li>
        <li>Pansioni i hoteli za pse - čuvanje pasa Subotica</li>
        <li>Pansioni i hoteli za pse - čuvanje pasa Niš</li>
        <li>Vrtići za pse</li>
      </ul>
      <div className="space-y-4 italic">
        <p>
          *Napomena: Ukoliko su neki od pansiona prestali sa radom u
          međuvremenu, a još uvek se nalaze na listi, nemojte zameriti. Trudimo
          se da redovno ažuriramo podatke.
        </p>
        <p>
          **Napomena: Ukoliko vlasnik pansiona ne želi iz bilo kog razloga da se
          njegov pansion pominje, slobodno nas može kontaktirati i isti ćemo
          ukloniti.
        </p>
      </div>
    </div>
  );
}

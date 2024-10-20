import React from "react";

export default function PurpleList() {
  return (
    <div className="space-y-10 ">
      <h3 className="font-bold text-2xl mb-16">
        Ovo je najveća lista pansiona i hotela za pse u Srbiji za 2024. godinu.
      </h3>

      <ul className="list-disc space-y-12 rounded-3xl bg-gray-200 px-32 py-16 font-semibold text-fontColorPurple text-4xl">
        <div className="ml-8">
          <li className="mb-10">Cene pansiona i hotela za pse po gradovima</li>
          <li className="mb-10">Pansioni i hoteli za pse - čuvanje pasa Beograd</li>
          <li className="mb-10">Pansioni i hoteli za pse - čuvanje pasa Novi sad</li>
          <li className="mb-10">Pansioni i hoteli za pse - čuvanje pasa Subotica</li>
          <li className="mb-10">Pansioni i hoteli za pse - čuvanje pasa Niš</li>
          <li className="mb-10">Vrtići za pse</li>
        </div>
      </ul>

      <div className="space-y-4 italic text-2xl">
        <p>
          <span className="text-fontColorPurple">*Napomena:</span>
          &nbsp; Ukoliko su neki od pansiona prestali sa radom u
          međuvremenu, a još uvek se nalaze na listi, nemojte zameriti. Trudimo
          se da redovno ažuriramo podatke.
        </p>
        <p>
          <span className="text-fontColorPurple">**Napomena:</span>
          &nbsp; Ukoliko vlasnik pansiona ne želi iz bilo kog razloga da se
          njegov pansion pominje, slobodno nas može kontaktirati i isti ćemo
          ukloniti.
        </p>
      </div>
    </div>
  );
}

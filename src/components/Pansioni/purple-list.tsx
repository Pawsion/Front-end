import React from "react";

export default function PurpleList() {
  return (
    <div className="space-y-10">
      <h3 className="font-bold text-xl lg:text-2xl mb-16">
        Ovo je najveća lista pansiona i hotela za pse u Srbiji za 2024. godinu.
      </h3>

      <ul className="list-disc space-y-6 md:space-y-8 lg:space-y-12 rounded-3xl bg-gray-200 px-8 py-12 md:px-16 md:py-14 lg:px-32 lg:py-16 font-semibold text-fontColorPurple text-lg md:text-2xl lg:text-4xl">
        <div className="ml-4 md:ml-6 lg:ml-8">
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#cene" className="hover:underline">
              Cene pansiona i hotela za pse po gradovima
            </a>
          </li>
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#beograd" className="hover:underline">
              Pansioni i hoteli za pse - čuvanje pasa Beograd
            </a>
          </li>
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#novi-sad" className="hover:underline">
              Pansioni i hoteli za pse - čuvanje pasa Novi Sad
            </a>
          </li>
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#subotica" className="hover:underline">
              Pansioni i hoteli za pse - čuvanje pasa Subotica
            </a>
          </li>
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#nis" className="hover:underline">
              Pansioni i hoteli za pse - čuvanje pasa Niš
            </a>
          </li>
          <li className="mb-6 md:mb-8 lg:mb-10">
            <a href="#vrtici" className="hover:underline">
              Vrtići za pse
            </a>
          </li>
        </div>
      </ul>

      <div className="space-y-4 italic text-base lg:text-2xl leading-relaxed">
        <p>
          <span className="text-fontColorPurple">*Napomena:</span>
          &nbsp; Ukoliko su neki od pansiona prestali sa radom u međuvremenu, a
          još uvek se nalaze na listi, nemojte zameriti. Trudimo se da redovno
          ažuriramo podatke.
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

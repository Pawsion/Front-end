import React from 'react';
import WashLocationCard from './washLocationCard'; // Adjust the path as needed

export default function WashLocations() {
  return (
    <div className="mb-32 ml-64 text-[28px] font-openSans font-regular">
      <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Samouslužne perionice</h2>
      <ol className="list-decimal ml-8 text-mainColorBlue">
        <li className="mb-4">
          <a href="#beograd" className="hover:underline">Beograd</a>
        </li>
        <li className="mb-4">
          <a href="#novi-sad" className="hover:underline">Novi Sad</a>
        </li>
        <li className="mb-4">
          <a href="#nis" className="hover:underline">Niš</a>
        </li>
        <li className="mb-4">
          <a href="#subotica" className="hover:underline">Subotica</a>
        </li>
        <li>
          <a href="#kragujevac" className="hover:underline">Kragujevac</a>
        </li>
      </ol>

      <div id="beograd" className="mt-16">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Beograd</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WashLocationCard
            name="Repionica"
            address="Garsije Lorke 1"
            phone="0637195371"
            website="http://www.repionica.rs"
          />
          <WashLocationCard
            name="Puppy Shower"
            address="Bulevar Zorana Đinđića 209"
            phone="0638076911"
            website="http://www.kupanjepasa.com"
          />
          <WashLocationCard
            name="WetPet"
            address="Španskih boraca 22, lokal br. 2"
            phone="065 8988098"
            website="http://www.wetpetconcept.com"
          />
          <WashLocationCard
            name="Kupanjac"
            address="Kapetan Mišina 2a"
            phone="0641584838"
            website="http://www.kupanjac.rs"
          />
        </div>
      </div>

      <div id="novi-sad" className="mt-16">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Novi Sad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WashLocationCard
            name="Dog Wash Bubble"
            address="Bulevar cara Lazara 104"
            phone="064 5935215"
            website="/"
          />
          <WashLocationCard
            name="Džeki"
            address="Radnička 31a"
            phone="060 5090708"
            website="http://www.dzeki.rs"
          />
        </div>
      </div>

      <div id="nis" className="mt-16">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Niš</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WashLocationCard
            name="Dog spa Nais"
            address="Cara Dušana 140a"
            phone="0601555636"
            website="/"
          />
        </div>
      </div>

      <div id="subotica" className="mt-16">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Subotica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WashLocationCard
            name="Samouslužno kupanje pasa Subotica"
            address="Trg Sinagoge 1a"
            phone="061 2146474"
            website="/"
          />
        </div>
      </div>

      <div id="kragujevac" className="mt-16">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Kragujevac</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WashLocationCard
            name="Samouslužna perionica za pse Snoopy"
            address="Ljube Vučkovića 2, lokal 4"
            phone="066 5370753"
            website="/"
          />
        </div>
      </div>
    </div>
  );
}

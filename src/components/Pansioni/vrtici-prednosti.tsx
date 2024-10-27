import Image from "next/image";
import React from "react";
import descImg from "@/../public/assets/images/Pansioni/P5.png";

export default function Prednosti() {
  return (
    <div className="my-20 flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 ">
      <Image src={descImg} alt="description image" />
      <div className="space-y-10 md:w-1/2 text-2xl">
        <h3 className="text-4xl font-RobotoSlab"><b>
        Koje su prednosti ostavljanja pasa u vrtiću?
        </b></h3>
        <ul className="list-disc ml-16">
          <li>Socijalizacija i slobodnije ponašanje u krugu novih pasa i ljudi</li>
          <li>Upoznavanje novih drugara</li>
          <li>Pozitivno ponašanje i stalna pažnja dovešće do manje nestašluka kod kuće</li>
          <li>Nećete osećati krivicu kao da ste ih ostavili kući</li>
        </ul>
        <p>
        Za vas smo izdvojili spisak vrtića u Beogradu i Novom Sadu, kao i njihovoj okolini:
        </p>
      </div>
    </div>
  );
}

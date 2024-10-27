import Image from "next/image";
import React from "react";
import descImg from "@/../public/assets/images/Pansioni/P3.png";

export default function Vrtici() {
  return (
    <div className="my-20 flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 mt-40">
      <Image src={descImg} alt="description image" />
      <div className="space-y-10 md:w-1/2 xl:text-2xl">
      <h2 className="text-mainColorBlue text-5xl">Vrtići za pse</h2>
        <p>
        Vrtići za pse su idealni za ljude koji su u radnom odnosu, a nemaju kome da ostave svoje mezimce ili
        jednostavno ne žele da ih ostave same kod kuće.  Mnogi od nas bi voleli da povedu svog psa na posao,
        ali nažalost često poslovne organizacije ne podržavaju ovakav vid poslovanja.
        <br /><br />
        Boravak u vrtiću može trajati <b>nekoliko sati ili ceo dan,</b> u zavisnosti kako se dogovorite, ali <b>ne podrazumeva noćenje.</b>
        </p>
      </div>
    </div>
  );
}

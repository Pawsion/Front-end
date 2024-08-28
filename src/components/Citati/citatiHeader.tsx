import React from "react";
import Image from "next/image";
import blogImage from "../../../public/assets/images/Citat/citatDog.png";
import QuotesDisplay from "./citati"; // Import the QuotesDisplay component

export default function CitatiHeader() {
  return (
    <div className="relative flex flex-col items-start">
      <div className="m-auto mt-20 flex flex-col justify-center space-y-8 p-4 lg:w-3/4">
        <h1 className="text-3xl font-semibold lg:text-6xl xl:text-8xl">
          101 citat o psima koji ce dotaći srce svakog vlasnika
        </h1>
        <h4 className="text-2xl">DATE AND TIME</h4>
        <Image alt="dog image" src={blogImage} />
        <p>
          Psi su postali neizostavan deo naših domova, ali i naših srca. Citati
          o psima nas podsećaju na tu snažnu, nera-skidivu vezu koju delimo s
          našim ljubimcima i zato uvek volimo da ih čitamo. Oni nas
          <span className="font-bold">
            {" "}
            podsećaju na važnost saosećanja, vernosti i prijateljstva
          </span>
          , svega onog što psi simbolizuju. <br></br> <br></br>Neka vas čitanje
          inspiriše da cenite svaki trenutak proveden sa čupavim vragolanima.
          Uživajte!
        </p>
      </div>

      <div>
        <QuotesDisplay />
      </div>
    </div>
  );
}

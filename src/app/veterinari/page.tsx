import React from "react";
import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Saloni/Background.png";
import Description from "@/components/Veterinari/description";
import Tips from "@/components/Veterinari/tips";
import Locations from "@/components/Veterinari/locations";

export default async function Home() {
  return (
    <main className="gradient text-center lg:text-start">
      <div>
        <PagesFirstSection
          title={
            <>
              <span>Veterinari i<br /> veterinarske<br /> ambulante u Srbiji</span>
            </>
          }
          bgImage={bgImage}
        />
        <Description />
        <Tips />
        <Locations />
      </div>
    </main>
  );
}

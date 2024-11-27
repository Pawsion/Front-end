import React from "react";
import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Saloni/Background.png";
import Description from "@/components/Veterinari/description";
import Tips from "@/components/Veterinari/tips";
import Locations from "@/components/Veterinari/locations";

export default async function Home() {
  return (
    <main className="gradient lg:text-start">
      <div>
        <PagesFirstSection
          title={
            <>
              <span>Veterinari i<span className="hidden sm:inline"><br /></span> veterinarske<span className="hidden sm:inline"><br /></span> ambulante u Srbiji</span>
            </>
          }
          bgImage={bgImage}
        />
        <Description />
        <Tips />
        {/* <Locations /> */}
      </div>
    </main>
  );
}

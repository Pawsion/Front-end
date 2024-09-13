import React from "react";
import FirstSection from "@/components/Home/firstSection";
import SecondSection from "@/components/Home/secondSection";
import ThirdSection from "@/components/Home/thirdSection";
import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Saloni/Background.png";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="gradient text-center lg:text-start">
      <div>
        <PagesFirstSection
          title="PetHub - usluge i saveti za pse koji će vam olakšati život"
          bgImage={bgImage}
        />
      </div>
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
    </main>
  );
}

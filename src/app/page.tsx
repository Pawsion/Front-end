import React from "react";
import FirstSection from "@/components/Home/firstSection";
import SecondSection from "@/components/Home/secondSection";
import ThirdSection from "@/components/Home/thirdSection";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="body gradient relative text-center lg:text-start">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}

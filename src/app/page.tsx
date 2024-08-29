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

      {/* <section className="flex h-[calc(100vh-60px)] flex-col items-center pt-8">
        <div className="relative mt-8 flex w-full flex-col items-center">
          <TitleComponentThird />
          <SubtitleComponentThird />
          <SubtitleComponentApplication />
          <ButtonComponent3 />
          <DogPicuteThird />
        </div>
      </section> */}
    </main>
  );
}

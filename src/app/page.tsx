import React from "react";
import TitleComponentThird from "@/components/Home/Home3/titleComponent";
import SubtitleComponentThird from "@/components/Home/Home3/subtitleComponent";
import SubtitleComponentApplication from "@/components/Home/Home3/subtitleApplication";
import ButtonComponent3 from "@/components/Home/Home3/button";
import DogPicuteThird from "@/components/Home/Home3/dogPicture";
import FirstSection from "@/components/Home/firstSection";
import SecondSection from "@/components/Home/secondSection";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="body gradient relative text-center lg:text-start">
      <FirstSection />
      <SecondSection />

      <section className="flex h-[calc(100vh-60px)] flex-col items-center pt-8">
        <div className="mt-8 flex w-full flex-col items-center">
          <TitleComponentThird />
          <SubtitleComponentThird />
          <SubtitleComponentApplication />
          <ButtonComponent3 />
          <DogPicuteThird />
        </div>
      </section>
    </main>
  );
}

import React from "react";
import DogImage from "../components/Home/dogPicture";
import TitleComponent from "../components/Home/titleComponent";
import SubtitleComponent from "../components/Home/subtitleComponent";
import PurplePawComponent from "@/components/Home/purplePaw";
import OrangePawComponent from "@/components/Home/orangePaw";
import CorgiImage from "@/components/Home/Home2/corgiPicture";
import TitleComponentSecond from "@/components/Home/Home2/titleComponent";
import SubtitleComponentSecond from "@/components/Home/Home2/subtitleComponent";
import TitleComponentThird from "@/components/Home/Home3/titleComponent";
import SubtitleComponentThird from "@/components/Home/Home3/subtitleComponent";
import SubtitleComponentApplication from "@/components/Home/Home3/subtitleApplication";
import ButtonComponent3 from "@/components/Home/Home3/button";
import DogPicuteThird from "@/components/Home/Home3/dogPicture";
import Footer from "@/components/Footer/footer";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="body gradient relative">
      <section className="mb-48">
        <OrangePawComponent />
        <TitleComponent />
        <SubtitleComponent />
        <PurplePawComponent />
        <DogImage />
      </section>
      <section className="bg-pageColorTan h-[92vh]">
        <div>
          <CorgiImage />
          <TitleComponentSecond />
          <SubtitleComponentSecond />
        </div>
      </section>
      <section className="h-[calc(100vh-60px)] flex flex-col items-center pt-8">
        <div className="flex flex-col items-center w-full mt-8">
          <TitleComponentThird />
          <SubtitleComponentThird />
          <SubtitleComponentApplication />
          <ButtonComponent3 />
          <DogPicuteThird />
        </div>
      </section>
      <Footer />
    </main>
  );
}

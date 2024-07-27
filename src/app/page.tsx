import React from "react";
import DogImage from "../components/Home/dogPicture";
import TitleComponent from "../components/Home/titleComponent";
import SubtitleComponent from "../components/Home/subtitleComponent";
import PurplePawComponent from "@/components/Home/purplePaw";
import OrangePawComponent from "@/components/Home/orangePaw";
import CorgiImage from "@/components/Home/Home2/corgiPicture";
import TitleComponentSecond from "@/components/Home/Home2/titleComponent";
import SubtitleComponentSecond from "@/components/Home/Home2/subtitleComponent";

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
      <section>
        <h1 className="h-screen">Welcome to the Third Section</h1>
      </section>
    </main>
  );
}

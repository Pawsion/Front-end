import React from "react";
import DogImage from "../components/Home/dogPicture";
import TitleComponent from "../components/Home/titleComponent";
import SubtitleComponent from "../components/Home/subtitleComponent";
import PurplePawComponent from "@/components/Home/purplePaw";
import OrangePawComponent from "@/components/Home/orangePaw";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="body gradient relative ">
      <OrangePawComponent />
      <TitleComponent />
      <SubtitleComponent />
      <PurplePawComponent />
      <DogImage />
    </main>
  );
}

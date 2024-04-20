import React from "react";
import DogImage from "../components/Home/dogPicture";
import TitleComponent from "../components/Home/titleComponent";
import SubtitleComponent from "../components/Home/subtitleComponent";
import ButtonKlikinder from "../components/Home/buttonKlikinder"

export default function Home() {
  return (
    <main className="body gradient relative">
      <TitleComponent />
      <SubtitleComponent />
      <ButtonKlikinder />
      <DogImage />
    </main>
  );
}

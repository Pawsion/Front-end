import React from "react";
import HoveringCard from "./hoveringCard";
import img1L from "@/../public/assets/images/Home/svg/1l.png";
import img1D from "@/../public/assets/images/Home/svg/1d.png";
import img2L from "@/../public/assets/images/Home/svg/2l.png";
import img2D from "@/../public/assets/images/Home/svg/2d.png";
import img3L from "@/../public/assets/images/Home/svg/3l.png";
import img3D from "@/../public/assets/images/Home/svg/3d.png";
import img4L from "@/../public/assets/images/Home/svg/4l.png";
import img4D from "@/../public/assets/images/Home/svg/4d.png";
import img5L from "@/../public/assets/images/Home/svg/5l.png";
import img5D from "@/../public/assets/images/Home/svg/5d.png";
import img6L from "@/../public/assets/images/Home/svg/6l.png";
import img6D from "@/../public/assets/images/Home/svg/6d.png";

export default function SecondSection() {
  return (
    <div className="mx-auto my-32 flex w-2/3 flex-col justify-center space-y-20 text-center">
      <h2 className="mt-30 text-6xl font-semibold text-fontColorPurple text-center">
        Naš sajt pokriva najveće gradove Srbije i ovde možete pronaći:
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 text-center text-[24px] font-bold">
        <HoveringCard
          title="Gde se nalaze pansioni i hoteli za pse"
          imgL={img1L}
          imgD={img1D}
        />
        <HoveringCard
          title="Koje salone i frizere za pse možete da posetite"
          imgL={img2L}
          imgD={img2D}
        />
        <HoveringCard
          title="Kod kog veterinara možete da odvedete psa"
          imgL={img3L}
          imgD={img3D}
        />
        <HoveringCard
          title=" Kome se obratiti za dresuru"
          imgL={img4L}
          imgD={img4D}
        />
        <HoveringCard
          title="Gde se nalaze azili i prihvatilišta"
          imgL={img5L}
          imgD={img5D}
        />
        <HoveringCard
          title="Blog sa zanimljivim informacijama"
          imgL={img6L}
          imgD={img6D}
        />
      </div>
    </div>
  );
}

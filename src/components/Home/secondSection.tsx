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
    <div className="mx-auto my-8 sm:my-16 lg:my-32 flex w-full md:w-2/3 flex-col justify-center space-y-10 sm:space-y-16 lg:space-y-20 text-left">
      <h2 className="mt-30 mx-4 text-4xl sm:text-5xl lg:text-6xl text-fontColorPurple text-left font-bold">
        Naš sajt pokriva najveće gradove Srbije i ovde možete pronaći:
      </h2>

      <div className="grid grid-cols-2 xl:gap-6 sm:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-left text-[16px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:font-bold">
        <HoveringCard
          title="Gde se nalaze pansioni i hoteli za pse"
          imgL={img1L}
          imgD={img1D}
          link="/pansioni"
        />
        <HoveringCard
          title="Koje salone i frizere za pse možete da posetite"
          imgL={img2L}
          imgD={img2D}
          link="/saloni"
        />
        <HoveringCard
          title="Kod kog veterinara možete da odvedete psa"
          imgL={img3L}
          imgD={img3D}
          link="/veterinari"
        />
        <HoveringCard
          title="Kome se obratiti za dresuru"
          imgL={img4L}
          imgD={img4D}
          link="/dresura"
        />
        <HoveringCard
          title="Gde se nalaze azili i prihvatilišta"
          imgL={img5L}
          imgD={img5D}
          link="/blog/shelters"
        />
        <HoveringCard
          title="Blog sa zanimljivim informacijama"
          imgL={img6L}
          imgD={img6D}
          link="/blog"
        />
      </div>
    </div>
  );
}

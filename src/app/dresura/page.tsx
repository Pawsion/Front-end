import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Saloni/Background.png";
import React from "react";
import Description from "@/components/Dresura/description";

export default function DresuraPage() {
  return (
    <div>
      <PagesFirstSection
        title="Dresura pasa - škole za obuku u Beogradu, Novom Sadu i Nišu"
        bgImage={bgImage}
      />
      <Description />
    </div>
  );
}

import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Saloni/Background.png";
import React from "react";
import Description from "@/components/Dresura/description";
import Gray from "@/components/Dresura/gray";
import BelowGray from "@/components/Dresura/below-gray";

export default function DresuraPage() {
  return (
    <div>
      <PagesFirstSection
        title="Dresura pasa - škole za obuku u Beogradu, Novom Sadu i Nišu"
        bgImage={bgImage}
      />
      <Description />
      <Gray />
      <BelowGray />
    </div>
  );
}

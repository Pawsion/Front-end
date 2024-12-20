import PagesFirstSection from "@/components/Reusable/pages-first-section";
import bgImage from "@/../public/assets/images/Dresura/bg.png";
import React from "react";
import Description from "@/components/Dresura/description";
import Gray from "@/components/Dresura/gray";
import BelowGray from "@/components/Dresura/below-gray";
import DresuraPoGradu from "@/components/Dresura/dresura-po-gradu";
import { dogSchools } from "@/utils/dogSchools-data";

export default function DresuraPage() {
  return (
    <div>
      <PagesFirstSection
        title={
          <>
            <span className="text-hYellow">Dresura pasa - škole za obuku u Beogradu, Novom Sadu i Nišu</span>
          </>
        }
        bgImage={bgImage}
      />
      <Description />
      <Gray />
      <BelowGray />
      
      <DresuraPoGradu city="Beogradu" data={dogSchools["beograd"]} />
      <DresuraPoGradu city="Novom Sadu" data={dogSchools["novi_sad"]} />
      <DresuraPoGradu city="Nišu" data={dogSchools["niš"]} />
    </div>
  );
}

import React from "react";
import BlogHeader from "@/components/Blog/blogHeader";
import blogImage from "../../../public/assets/images/Parks/Header.png";
import ParkRules from "./parkRules";
import ParkPictures from "./parkPictures";

const ParksHeader: React.FC = () => {
  const title = "Parkovi za pse";
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    <>
    Parkovi za pse su jednako korisni kako za ljude tako i za ljubimce. Oni omogućavaju vlasnicima pasa da<br />
    provode vreme napolju i da fizički budu aktivni sa svojim ljubimcima. U njima psi mogu da se slobodno kreću,<br />
    vežbaju i socijalizuju.
    </>,
    <>
    Većina parkova su osigurani ogradom kroz koju psi ne mogu da se provuku ili preskoče, a  imaju i dvostruki<br />
    sistem vrata kako bi ih sprečili da pobegnu kada se ulazi ili izlazi iz prostora.
    </>,
    <>
    Ukoliko prostor dozvoljava, često su podeljeni na određene zone, za velike i male pse.
    </>,
  ];

  return (
    <div>
      <BlogHeader
        title={title}
        date={date}
        readingTime={readingTime}
        imageSrc={blogImage}
        content={content}
      />
      <div className="ml-64 mb-16">
        <h2 className="ml-4">
          Nepisana pravila ponašanja u parku
        </h2>
      </div>
      <div className="ml-80 mb-16">
        <ParkRules />
      </div>
      <div className="ml-72">
        <ParkPictures />
      </div>
    </div>
  );
};

export default ParksHeader;
import React from "react";
import BlogHeader from "@/components/Blog/blogHeader";
import blogImage from "../../../public/assets/images/Bars/Header.png";
import BarTips from "./barTips";
import BarList from "./barsList";

const CitatiHeader: React.FC = () => {
  const title = "Koji restorani i kafići su pet friendly u Beogradu?";
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    "Pet friendly restorani su deo savremene kulture i oni se nalaze u svim većim gradovima sveta, pa tako i u Beogradu. U današnje vreme sve više ljudi ima kućne ljubimce, sa kojima žele da provode vreme i da ih vode svuda sa sobom. Zbog toga se pojavila potreba da i njima bude dozvoljen ulazak u hotele, restorane i druge objekte.",
    "Sada više niko ne mora da postavlja pitanje da li može da uđe sa psom i popije kafu u kafiću ili uživa u obroku u restoranu, dovoljno je samo da pogleda na ulazna vrata. Ukoliko stoji nalepnica na kojoj piše „pet friendly“, to znači da su u taj objekat dobrodošli i ljubimci.",
    "A broj ovakvih objekata raste iz dana u dan. ",
    "Pre nego što krenete na ručak sa svojim psom, istražite koliko je restoran zapravo “pet friendly”. Recimo neki restorani primiće ljubimce samo u svojim otvorenim prostorijama, dok će ih drugi dočekati nudeći posude za vodu, poslastice i čak posebne menije za pse.",
    "Bitno je dobro se raspitati kako ne biste došli u potencijalno neprijatnu situaciju.",
    "Ukoliko već posećujete takav objekat, važno je da maniri vašeg ljubimca budu besprekorni. Evo nekoliko saveta koji će vam pomoći:",

  ];

  return (
    <div className="relative flex flex-col items-center">
      <BlogHeader
        title={title}
        date={date}
        readingTime={readingTime}
        imageSrc={blogImage}
        content={content}
      />
      <div className="ml-80">
      <BarTips />
      <div className="mb-40"><BarList /></div>
      </div>
    </div>
  );
};

export default CitatiHeader;

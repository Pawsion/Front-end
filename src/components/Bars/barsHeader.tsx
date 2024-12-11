import React from "react";
import BlogHeader from "@/components/Blog/blogHeader";
import blogImage from "../../../public/assets/images/Bars/Header.png";
import BarTips from "./barTips";
import BarList from "./barsList";

const CitatiHeader: React.FC = () => {
  const title = 
  <>
  Koji restorani i kafići su pet 
  friendly u Beogradu?
  </>
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    <>
    Pet friendly restorani su deo savremene kulture i oni se nalaze u svim većim gradovima sveta, pa tako i u Beogradu. U današnje vreme sve više ljudi ima kućne ljubimce, sa kojima žele da provode vreme i da ih vode 
    svuda sa sobom. Zbog toga se pojavila potreba da i njima bude dozvoljen ulazak u hotele, restorane i druge  
    objekte.
    </>,
    <>
    Sada više niko ne mora da postavlja pitanje da li može da uđe sa psom i popije kafu u kafiću ili uživa u obroku 
    u restoranu, dovoljno je samo da pogleda na ulazna vrata. Ukoliko stoji nalepnica na kojoj piše „pet friendly“, 
    to znači da su u taj objekat dobrodošli i ljubimci.
    </>,
    <>
    A broj ovakvih objekata raste iz dana u dan.
    </>,
    <>
    Pre nego što krenete na ručak sa svojim psom, istražite koliko je restoran zapravo <b>“pet friendly”</b>. Recimo neki 
    restorani primiće ljubimce samo u svojim otvorenim prostorijama, dok će ih drugi dočekati nudeći posude za  
    vodu, poslastice i čak posebne menije za pse.
    </>,
    <>
    Bitno je <b>dobro se raspitati</b> kako ne biste došli u potencijalno neprijatnu situaciju.
    </>,
    <>
    Ukoliko već posećujete takav objekat, važno je da maniri vašeg ljubimca budu besprekorni. Evo <b>nekoliko  
    saveta</b> koji će vam pomoći:
    </>
  ];

  return (
    <div className="items-center">
      <BlogHeader
        title={title}
        date={date}
        readingTime={readingTime}
        imageSrc={blogImage}
        content={content}
      />
      <div className="lg:ml-80 px-8">
      <BarTips />
      </div>
      <div className="lg:mb-40 lg:ml-64 lg:w-3/4">
      <p className="mt-16 text-base sm:text-lg lg:text-2xl font-openSans font-regular px-2">
        Na kraju, važno je znati kada je vreme da napustite restoran. Ako vaš pas nije raspoložen da mirno sedi ili 
        jednostavno nešto ne ide po planu, nemojte pokušavati da silite stvari. Bolje je da ranije odete i pokušate 
        ponovo drugi put, nego da izazovete neprijatnu situaciju.</p>
        <BarList />
        </div>
      </div>
  );
};

export default CitatiHeader;

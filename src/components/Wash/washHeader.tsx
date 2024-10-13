import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import blogImage from "../../../public/assets/images/Wash/Header.png";
import WashPros from './washPros';
import WashLocations from './washLocations';

const WashHeader: React.FC = () => {
  const title =    
  <>
  Samouslužne perionice za pse -<br />gde i kako okupati psa
  </>
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    <>
    Samouslužne perionice su sve više popularne među vlasnicima pasa i nalaze se u svim većim gradovima Srbije.<br /> Uglavnom su slično opremljene, a ono što ih razlikuje je raspon cene i radnih sati.
    </>
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
      <div className="mb-4 ml-64">
        <h2>
          Koje su prednosti samouslužne perionice?
        </h2>
      </div>
      <WashPros />
      <WashLocations />
    </div>
  );
};

export default WashHeader;

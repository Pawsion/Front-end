import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import blogImage from "../../../public/assets/images/Food/Header.png";
import FoodContent from '@/components/Food/foodContent';
import SoftOrRegular from './softOrRegular';
import BestFood from './bestFood';
import FoodList from './foodList';

const FoodHeader: React.FC = () => {
  const title = 
  <>
  Кako izabrati najbolju hranu za<br />pse - Lista brendova za 2024.
  </>
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    <>
    Ovo je vreme kada su psi, naši najbolji prijatelji postali članovi porodice, a samim tim se i njihova ishrana<br />popela za letvicu više.
    </>,
    <>
    Promena u kvalitetu života dovela je do <b>nicanja mnoštva brendova i vrsta hrane za pse,</b> ostavivši vlasnike u<br />nedoumici koja je hrana najbolja za njihove krznene prijatelje.
    </>,
    <>
    Budući da je sve veći broj vas koji želite sami da pravite hranu za svog ljubimca, potrudićemo se da vam<br />pružimo informacije i na tu temu.
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
      <FoodContent />
      <SoftOrRegular />
      <BestFood />
      <FoodList />
    </div>
  );
};

export default FoodHeader;

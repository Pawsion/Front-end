import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import namesImage from '../../../public/assets/images/Names/Header.png';
import NamesTips from './namesTips';
import DogNamesDisplay from './namesGenders';
import NamesList from './namesList';


const NamesHeader: React.FC = () => {
  const title = 'Imena za pse koja "kidaju" po komšiluku, a i šire';
  const date = 'DD.MM.YY';
  const readingTime = 'x min čitanja';
  const content = [
    'Došlo je vreme da dovedete kući svoje novo štene. Nabavili ste hranu za pse, izabrali savršeni povodac i ogrlicu. Šta još preostaje? Izabrati savršeno ime za psa. Svako ko je ikada morao da da ime ljubimcu može vam reći da to i nije baš lako. Postoji beskonačno mnogo opcija.',
    'Izbor imena za vašeg psa možda se neće desiti preko noći. Ne očajavate, uvek se setite da će ga to ime pratiti kroz ceo život i zato ne žurite sa odlukom. Nije na odmet ni da provedete nekoliko dana sa štenetom i da ga bolje upoznate. Možda će neka njegova osobina ili karakteristika upravo biti inspiracija za novo ime.',
    'Bez obzira da li tražite zabavno ime za psa inspirisano njegovom veselom ličnošću ili jedinstveno koje će ga izdvojiti od drugih, potrudili smo se da na našoj listi pronađete ono pravo, baš za njega.'
  ];

  return (
    <div className="relative flex flex-col items-center p-4">
      <BlogHeader
        title={title}
        date={date}
        readingTime={readingTime}
        imageSrc={namesImage}
        content={content}
      />
      <div className="w-full mt-8">
        <NamesTips />
      </div>
      <div className="w-full mt-8">
        <DogNamesDisplay />
      </div>
      <div className="w-full mt-8">
        <NamesList />
      </div>
    </div>
  );
};

export default NamesHeader;

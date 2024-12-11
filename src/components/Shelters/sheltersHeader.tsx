import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import blogImage from "../../../public/assets/images/Shelters/sheltersHeader.png";
import SheltersTips from './sheltersTips';
import SheltersContent from './sheltersContent';
import SheltersLocations from './sheltersLocations';
import { parseDescription } from "../../utils/parser";

const SheltersHeader: React.FC = () => {
  const title = "Azili i prihvatilišta za pse u gradovima Srbije";
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    "Kada se psi pronađu na ulici, bilo da su pobegli ili ih vlasnici ostavili, često završavaju u prihvatilištima za životinje gde ih osoblje smešta i brine o njima. Tamo se podvrgavaju [b]veterinarskim pregledima[/b] da bi se ustanovilo da li je životinja zdrava ili joj  je potrebno lečenje.",
    "Nakon pregleda, životinja se [b]steriliše, vakciniše, vraća nazad[/b] na teritoriju na kojoj je do tada živela [b]ili trajno[/b] [b]zadržava[/b] u prostorijama prihvatilišta dok se ne javi potencijalni vlasnik.",
    "Nažalost, prihvatilišta su poslednja stanica za više od polovine životinja koje tamo završe. Samo [b]oko polovine[/b][b] životinja[/b] koje uđu u prihvatilište ikada se vrati svom originalnom vlasniku ili pronađe novi dom. One koje su previše bolesne, stare ili ne pronađu dom se često eutanaziraju.",
  ];

  return (
    <div>
      <BlogHeader
        title={parseDescription(title)}
        date={date}
        readingTime={readingTime}
        imageSrc={blogImage}
        content={content.map(item => parseDescription(item))}
        />
      <div>
      <SheltersTips />
      </div>
      <div>
        <SheltersContent />
      </div>
      <div>
        <SheltersLocations />
      </div>
    </div>
  );
};

export default SheltersHeader;

import React from 'react';
import Positive from "../../../public/assets/images/Food/Positive.png";
import Negative from "../../../public/assets/images/Food/Negative.png";

export default function SoftOrRegular() {
  return (
    <div id="vlažna-hrana-vs-granule" className="mb-16 ml-64 text-2xl font-regular">
      <h2 className="mb-16 mt-32">
        Da li je za pse bolja vlažna hrana ili granule?
      </h2>
      <p className="mb-8">
        Jedna od najčeščih nedoumica vlasnika – u kojoj formi da dajem mom ljubimcu hranu? Pre no što vam<br />odgovorimo na ovo pitanje, osvrnućemo se na to šta koja vrsta hrane predstavlja i za šta se koristi.
      </p>
      <p className="mb-8">
        <b>Vlažna,</b> kao što joj i sam naziv kaže, nalazi se u tečnijem, odnosno mekšem obliku. Sastav joj zavisi od vrste, ali<br />i od proizvođača. Takođe, veliku ulogu igra i činjenica da li je u pitanju komercijalni, ili medicinski proizvod.
      </p>
      <p className="mb-8">
        Istraživanja su pokazala negativne i pozitivne strane komercijalne, vlažne hrane za pse:
      </p>
      <div className="mb-8">
        <h3 className="text-[28px] font-regular text-fontColorBlack mb-4">
          Negativna strana:
        </h3>
        <ul className="list-none ml-32 mt-16 mb-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Sadrži visoku koncentraciju fosfora koja ima negativan učinak na bubrežne parametre</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Brže se kvari i teže je dozirati</span>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-regular text-fontColorBlack mb-4">
          Pozitivna strana:
        </h3>
        <ul className="list-none ml-32 mt-16 mb-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Dobro se pokazala kod pasa sa slabijim apetitom</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Dobro se pokazala kod povreda u usnoj duplji i upaljenim desnima</span>
          </li>
        </ul>
      </div>
      <p className="mb-16">
        <b>Suva</b> hrana mehanički čisti zube, održavajući zube i usta zdravim. I ona ima negativne i pozitivne strane.
      </p>
      <div className="mb-8">
        <h3 className="text-[28px] font-regular text-fontColorBlack mb-4">
          Negativna strana:
        </h3>
        <ul className="list-none ml-32 mt-16 mb-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Manje je primamljiva bolesnim psima kojima je smanjen apetit</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Manje je primamljiva psima koji imaju oralne smetnje</span>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-[28px] font-regular text-fontColorBlack mb-4">
          Pozitivna strana:
        </h3>
        <ul className="list-none ml-32 mt-16 mb-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Ovakva forma hrane je jeftinija</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-6 h-6 mr-4 mt-2" />
            <span>Postoji mnogo više kategorija, u zavisnosti od potreba vašeg ljubimca</span>
          </li>
        </ul>
      </div>
      <p>
        Budući da je izbor kvalitetne vlažne hrane limitiran, a <i>mnogi komercijalni vlažni proizvodi sadrže pojačivače ukusa<br />i druge štetne aditive, </i>radije se opredeljujemo za granule.
      </p>
    </div>
  );
}

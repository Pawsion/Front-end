import React from 'react';
import Positive from "../../../public/assets/images/Food/Positive.png";
import Negative from "../../../public/assets/images/Food/Negative.png";

export default function SoftOrRegular() {
  return (
    <div id="vlažna-hrana-vs-granule" className="mb-16 px-4 lg:ml-64 text-base sm:text-lg lg:text-2xl font-openSans font-regular">
      <h2 className="text-xl sm:text-3xl lg:text-6xl text-fontColorBlack text-left mb-8 lg:mb-16 font-bold lg:font-normal">
        Da li je za pse bolja vlažna hrana ili granule?
      </h2>
      <p className="mb-6 lg:mb-8 leading-relaxed">
        Jedna od najčeščih nedoumica vlasnika u kojoj formi da dajem mom ljubimcu hranu? Pre no što vam
        <span className="hidden lg:inline"><br /></span> odgovorimo na ovo pitanje, osvrnućemo se na to šta koja vrsta hrane predstavlja i za šta se koristi.
      </p>
      <p className="mb-6 lg:mb-8 leading-relaxed">
        <b>Vlažna,</b> kao što joj i sam naziv kaže, nalazi se u tečnijem, odnosno mekšem obliku. Sastav joj zavisi od vrste,
        <span className="hidden lg:inline"><br /></span> ali i od proizvođača. Takođe, veliku ulogu igra i činjenica da li je u pitanju komercijalni, ili medicinski proizvod.
      </p>
      <p className="mb-6 lg:mb-8 leading-relaxed">
        Istraživanja su pokazala negativne i pozitivne strane komercijalne, vlažne hrane za pse:
      </p>

      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-fontColorBlack mb-4">
          Negativna strana:
        </h3>
        <ul className="list-none ml-4 sm:ml-8 lg:ml-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Sadrži visoku koncentraciju fosfora koja ima negativan učinak na bubrežne parametre</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Brže se kvari i teže je dozirati</span>
          </li>
        </ul>
      </div>

      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-fontColorBlack mb-4">
          Pozitivna strana:
        </h3>
        <ul className="list-none ml-4 sm:ml-8 lg:ml-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Dobro se pokazala kod pasa sa slabijim apetitom</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Dobro se pokazala kod povreda u usnoj duplji i upaljenim desnima</span>
          </li>
        </ul>
      </div>

      <p className="mb-6 lg:mb-16 leading-relaxed">
        <b>Suva</b> hrana mehanički čisti zube, održavajući zube i usta zdravim. I ona ima negativne i pozitivne strane.
      </p>

      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-fontColorBlack mb-4">
          Negativna strana:
        </h3>
        <ul className="list-none ml-4 sm:ml-8 lg:ml-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Manje je primamljiva bolesnim psima kojima je smanjen apetit</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Negative.src} alt="Negative Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Manje je primamljiva psima koji imaju oralne smetnje</span>
          </li>
        </ul>
      </div>

      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-fontColorBlack mb-4">
          Pozitivna strana:
        </h3>
        <ul className="list-none ml-4 sm:ml-8 lg:ml-16 text-gray-700">
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Ovakva forma hrane je jeftinija</span>
          </li>
          <li className="flex items-start mb-4">
            <img src={Positive.src} alt="Positive Bullet" className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1 sm:mt-2" />
            <span>Postoji mnogo više kategorija, u zavisnosti od potreba vašeg ljubimca</span>
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        Budući da je izbor kvalitetne vlažne hrane limitiran, a <i>mnogi komercijalni vlažni proizvodi sadrže pojačivače ukusa
        <span className="hidden lg:inline"><br /></span> i druge štetne aditive,</i> radije se opredeljujemo za granule.
      </p>
    </div>
  );
}

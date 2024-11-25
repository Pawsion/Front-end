import React from 'react';

export default function BestFood() {
  return (
    <div id="najbolje-granule" className="mb-16 px-4 lg:ml-64 text-base sm:text-lg lg:text-2xl font-openSans">
      <h2 className="text-xl sm:text-3xl lg:text-6xl text-fontColorBlack text-left mb-8 lg:mb-16 font-bold lg:font-normal">
        Koje su najbolje granule za psa?
      </h2>
      <p className="mb-6 lg:mb-16 leading-relaxed">
        Otišli ste u pet šop i videli police pune hrane za pse. Sve su različite, od izgleda do sastava i cene.
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed italic">
        <i>Koje izabrati?</i>
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed">
        Pre same kupovine neophodno <b>je znati nutritivne potrebe vašeg ljubimca.</b> Kao i ljudska ishrana, pseća <b>mora
        <span className="hidden lg:inline"><br /></span> sadržati izbalansirane količine makro i mikronutrijenata.</b>
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed">
        Svim psima su potrebni isti nutrijenti, ali u različitom procentu. Odnos proteina, ugljenih hidrata, masti i drugih
        <span className="hidden lg:inline"><br /></span> nutrijenata, kao i kalorijske potrebe, <b>zavisiće umnogome od starosti životinje, ali i rase, aktivnosti i drugih
        <span className="hidden lg:inline"><br /></span> zdravstvenih faktora.</b>
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed">
        Na svakom pakovanju granula trebao bi postojati <b>tabelarni prikaz sastava,</b> gde su sastojci najčešće poređani
        <span className="hidden lg:inline"><br /></span> tako da je procentualno ili količinski prvi najzastupljeniji, dok je poslednji najmanje.
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed">
        Ono što bismo vam svakako preporučili jeste da <b>kupujete granule premium ili superpremium kvaliteta.</b> Sa
        <span className="hidden lg:inline"><br /></span> njima se nikad nećete bojati da li vaš krzneni prijatelj dobija dovoljno nutrijenata.
      </p>
      <p className="mt-6 lg:mt-16 leading-relaxed">
        Neka od imena koja se ističu u svetu granula su:
      </p>
      <ul className="list-disc list-inside ml-6 sm:ml-12 lg:ml-16 mt-6 lg:mt-16 font-semibold">
        <li className="mb-2 sm:mb-4">Acana</li>
        <li className="mb-2 sm:mb-4">Royal Canin</li>
        <li className="mb-2 sm:mb-4">Hills</li>
        <li className="mb-2 sm:mb-4">Cibau</li>
        <li className="mb-2 sm:mb-4">Farmina N&D</li>
        <li className="mb-2 sm:mb-4">Trovet</li>
      </ul>
    </div>
  );
}

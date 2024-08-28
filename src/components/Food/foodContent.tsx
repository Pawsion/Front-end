import React from 'react';

export default function FoodContent() {
  return (
    <div className="mb-16 ml-64 text-[28px] font-openSans font-regular">
      <h2 className="text-[64px] font-regular text-fontColorBlack text-left mb-16">Sadržaj</h2>
      <ol className="list-decimal ml-8 text-mainColorBlue">
        <li className="mb-4">
          <a href="#vlažna-hrana-vs-granule" className="hover:underline">Da li je za pse bolja vlažna hrana ili granule?</a>
        </li>
        <li className="mb-4">
          <a href="#najbolje-granule" className="hover:underline">Koje su najbolje granule za psa?</a>
        </li>
        <li>
          <a href="#lista-najbolje-hrane" className="hover:underline">Lista 10 najbolje hrane po brendu/proizvođaču po našem mišljenju</a>
        </li>
      </ol>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import img from "@/../public/assets/images/Dresura/D1.png";

export default function Description() {
  return (
    <div className="m-auto my-20  w-3/4">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="space-y-10">
          <p>
            Dresura psa je proces u kojem motivišete psa da na vaš zahtev radi
            ono što želite, dok se zabavljate.
          </p>
          <p>
            Imajte na umu da vaš pas nikada neće prestati da uči, pa tako ni vi
            ne smete prestati da ga podučavate. Takođe, kada ga jednom nečemu
            naučite, morate nastaviti da ga podsećate na to ili će vremenom
            zaboraviti.
          </p>
          <p>
            Kao i ljudima, i psima je potrebna motivacija da rade stvari. Morate
            dobro upoznati svog psa da biste znali šta voli, a šta ne.
          </p>
        </div>
        <Image alt="" src={img} height={400} />
      </div>
      <p>
        Jedan od najjačih motiva za pse je hrana. Ukoliko pravilno koristite
        hranu za trening, pas će izvršavati vaše komande, a hrana vam više neće
        biti potrebna. Naravno, uvek je poželjno da ga pohvalite posle uspešno
        obavljenog zadatka.
      </p>
    </div>
  );
}

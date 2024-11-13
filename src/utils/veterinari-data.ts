export type Veterinarian = {
  name: string;
  url: string;
  address: string;
  phone: string;
};

type CityData = {
  [area: string]: Veterinarian[];
};

type VeterinariData = {
  [city: string]: CityData;
};

export const veterinariData: VeterinariData = {
  beograd: {
    vozdovac: [
      {
        name: "Vetvizija",
        url: "https://www.vetvizija.com/",
        address: "Sušačka 1",
        phone: "061 175-7030",
      },
      {
        name: "Veterinarska Ambulanta 'Gravida'",
        url: "https://www.gravida.rs/",
        address: "Vojvode Stepe 369",
        phone: "063 270 223",
      },
      {
        name: "Pet Impuls",
        url: "https://veterinarvozdovac.com/",
        address: "Vidska 14b",
        phone: "060 394 7468",
      },
      {
        name: "Veterinarska ambulanta Sveti Vrači",
        url: "https://www.veterinar-beograd.rs/",
        address: "Admirala Vukovića 75",
        phone: "011 24 61 383",
      },
      {
        name: "NomoVet",
        url: "https://nomovet.com/",
        address: "Vojvode Stepe 210",
        phone: "069 397 34 30, 011 397 34 30",
      },
      {
        name: "Veterinarska Klinika Novak",
        url: "https://vetnovak.com/",
        address: "Veselina Masleše 55",
        phone: "011 2851 856, 011 2851 923",
      },
    ],
    vracar: [
      {
        name: "VDC veterinarska ambulanta",
        url: "https://www.vdcvet.rs/",
        address: "Jovana Rajića 5",
        phone: "060 424-313 2",
      },
      {
        name: "IVAVET",
        url: "https://ivavet.com/",
        address: "Šumatovačka 111",
        phone: "011 78 39 039, 063 8056 118",
      },
    ],
    cukarica: [
      {
        name: "Veterinarska ambulanta Tomić",
        url: "https://veterinar-tomic.co.rs",
        address: "Valjevska 1",
        phone: "063/23-22-88, 011/2545-543",
      },
      {
        name: "Veterinarska ambulanta Ada Vet",
        url: "https://www.adavet.rs/",
        address: "Radnička 37b",
        phone: "064 421-9820",
      },
      {
        name: "Vet for 5",
        url: "/",
        address: "Ratka Mitrovica 75ž",
        phone: "065 949-5400",
      },
    ],
    novi_beograd: [
      {
        name: "Veterinarska ordinacija 'Dr. Maja Ilić'",
        url: "http://www.drmajailic.com/",
        address: "Bulevar Mihaila Pupina 10Ž",
        phone: "065 445-5787",
      },
      {
        name: "Klinika Pet-Vet Care",
        url: "https://petvetcare.rs/",
        address: "Bulevar Mihajla Pupina 10ž, lokal 1 NP",
        phone: "065 300 30 52, 011 31 31 258",
      },
      {
        name: "Vet Planet Clinic",
        url: "https://vetplanet.rs/",
        address: "Tošin bunar 128",
        phone: "065/35-65-664, 011/77-07-227",
      },
      {
        name: "A-Z Vet",
        url: "https://azvet.rs/",
        address: "Jurija Gagarina 22L, lokal 13",
        phone: "069/27-26-350",
      },
    ],
    vidikovac: [
      {
        name: "Klinika Pet-Vet Care",
        url: "https://petvetcare.rs/",
        address: "Vidikovački venac 2a",
        phone: "011 4386 279, 063 529 407",
      },
      {
        name: "Pet Land",
        url: "https://www.petland.rs/",
        address: "Vidikovački venac 73Z",
        phone: "011/770-90-96, 063/103-54-69",
      },
    ],
    rakovica: [
      {
        name: "Vita Anima JR",
        url: "https://www.vitaanimajr.com/",
        address: "Pilota Mihaila Petrovića 5",
        phone: "066 386 237",
      },
    ],
    zvezdara: [
      {
        name: "Veterinarska ambulanta My Vet",
        url: "https://www.myvet.rs/",
        address: "Bulevar Kralja Aleksandra 518v",
        phone: "011 7478 818, 060 66 66 381",
      },
      {
        name: "Veterinar Boban",
        url: "https://www.vetboban.rs/",
        address: "Valterova 42",
        phone: "011/ 3821-100, 063 / 241-668",
      },
      {
        name: "Veterinarska ambulanta Šapa",
        url: "https://sapavet.rs/",
        address: "Preševska 34",
        phone: "064-312-6921, 011-380-9675",
      },
    ],
    savski_venac: [
      {
        name: "Urgentna veterina Oculus",
        url: "https://urgentnaveterinaoculus.rs/",
        address: "Dobropoljska 15, Beograd",
        phone: "011 77 06 114",
      },
      {
        name: "Veterinarska Ambulanta GUTA",
        url: "https://www.beograd-veterinar.com/",
        address: "Sanje Živanovića 28",
        phone: "011 2647 240",
      },
      {
        name: "Veterinarska Ambulanta Alessandra",
        url: "https://alesvet.com/",
        address: "Varovnička 6",
        phone: "011 - 2401-047, 011 - 2403-486",
      },
    ],
    miljakovac: [
      {
        name: "Pet Friend",
        url: "https://www.pet-friend.co.rs/",
        address: "Borska 9c",
        phone: "011 3514 445, 065 3514 445",
      },
    ],
    palilula: [
      {
        name: "JKP 'Veterina Beograd'",
        url: "https://www.veterinabeograd.rs/",
        address: "Bulevar despota Stefana 119",
        phone: "011/276-4366",
      },
    ],
    dorcol: [
      {
        name: "Veterinarska ordinacija Vet House",
        url: "https://vethouse.rs/",
        address: "Cara Uroša 37",
        phone: "011-26-26-323",
      },
      {
        name: "Vet Centar",
        url: "https://www.vetcentar.co.rs/",
        address: "Pančićeva 10",
        phone: "011 262 55 66, 064 111 66 36",
      },
    ],
    banovo_brdo: [
      {
        name: "Veterinarska ordinacija Vet House",
        url: "https://vethouse.rs/",
        address: "Blagoja Parovića 27",
        phone: "011-35-72-704",
      },
    ],
  }
}


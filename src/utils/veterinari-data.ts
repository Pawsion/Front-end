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
        "pančevo": [
          {
            "name": "PomPomVET",
            "url": "http://veterinarpancevo.rs/",
            "address": "Kej Radoja Dakića 17, lokal 16",
            "phone": "013 2300010, 065 8230011"
          },
          {
            "name": "Viva Vet",
            "url": "https://www.vivavet.rs/",
            "address": "Miloša Trebinjca 44",
            "phone": "013 333513, 064 6444701"
          },
          {
            "name": "Kameni Vet",
            "url": "https://kamenivet.com/",
            "address": "Dr. Svetislava Kasapinovića 37/2",
            "phone": "060 7002885"
          },
          {
            "name": "Marlo Pet",
            "url": "https://www.marlopet.rs/",
            "address": "Svetozara Miletića 83d",
            "phone": "063 343-693, 013 335-350"
          },
          {
            "name": "Šapa Vet 013",
            "url": "https://sapavet013.wordpress.com/",
            "address": "Svetozara Miletića 2",
            "phone": "013/351-793, 062/150-27-10"
          },
          {
            "name": "Veterinarska stanica Pančevo",
            "url": "http://www.vetstpancevo.com/",
            "address": "Žarka Zrenjanina broj 83",
            "phone": "013 345-688 – Ambulanta Pančevo, 013 344-821 – Ambulanta za male životinje"
          },
          {
            "name": "Veterinarska Stanica Zoo Centar",
            "url": "https://www.facebook.com/p/Veterinarska-Stanica-Zoo-Centar",
            "address": "Svetog Save 34",
            "phone": "063 8843123"
          },
          {
            "name": "Živa Vet",
            "url": "https://www.instagram.com/ziva.vet/",
            "address": "Mihajla Petrovića Alasa 3",
            "phone": "065 2316530"
          },
          {
            "name": "Ket Vet",
            "url": "https://www.instagram.com/ketvet.ordinacija/",
            "address": "Braće Jovanović 106",
            "phone": "013 405123"
          },
          {
            "name": "Snoopy-vet",
            "url": "https://www.instagram.com/snupivet/",
            "address": "Žarka Zrenjanina 55",
            "phone": "061 1302773"
          }
        ],
        "borča": [
          {
            "name": "VetAlfa",
            "url": "http://vetalfa.rs/",
            "address": "Valjevskog odreda 29",
            "phone": "011/3329-713, 063/840-20-41"
          },
          {
            "name": "Veterinarska stanica Petrovac",
            "url": "https://www.petrovacvet.com/",
            "address": "Borčanskih žrtava 1914, br. 92",
            "phone": "011 3328 478"
          },
          {
            "name": "Veterinarska ambulanta Lazarević",
            "url": "https://www.veterinarskaambulantalazarevic.rs/",
            "address": "Zrenjaninski put 30",
            "phone": "011/3319 015, 063/216 663"
          },
          {
            "name": "Petman Veterinarska Ambulanta",
            "url": "https://www.instagram.com/petmanvet/",
            "address": "Drinske Divizije 1/8",
            "phone": "060 7446600"
          }
        ],
        "mirijevo": [
          {
            "name": "Veterinarska Ambulanta Vesna",
            "url": "https://vetvesna.com/",
            "address": "16. Oktobra 15",
            "phone": "011-3420-058, 065-3420-058"
          },
          {
            "name": "BSPSA Vet Group",
            "url": "https://www.vetgroup.rs/",
            "address": "Mirijevski bulevar 211",
            "phone": "064 05 15 600"
          },
          {
            "name": "Mona Vet",
            "url": "https://www.facebook.com/mona.vet.315/?locale=sr_RS",
            "address": "Rableova 17, lokal 10",
            "phone": "060/099-12-32"
          },
          {
            "name": "Meowoof Ordinacija",
            "url": "https://veterinarzvezdara.com/",
            "address": "Pere Veljkovića 12",
            "phone": "0607262966"
          },
          {
            "name": "Veterinarska ambulanta Opstanak",
            "url": "https://www.facebook.com/p/Veterinarska-Ambulanta-Opstanak/",
            "address": "Figarova 1",
            "phone": "011/342-6150, 063/199-9918"
          },
          {
            "name": "Veterinarska ambulanta Barba",
            "url": "https://www.instagram.com/veterinarska_ambulanta_barba/",
            "address": "Matice Srpske 97",
            "phone": "064/256-88-29"
          }
        ],
        "zemun": [
          {
            "name": "Veterinarska ambulanta Božinović",
            "url": "https://www.veterinarbozinovic.rs/",
            "address": "Ševina 37a",
            "phone": "064/159‑6115, 011/37 30 565"
          },
          {
            "name": "Taurunum Vet",
            "url": "https://www.taurunumvet.com/",
            "address": "Prvomajska 117",
            "phone": "060 7110113, 061 1415798"
          },
          {
            "name": "Dulitl",
            "url": "/",
            "address": "Svetosavska 11, Zemun",
            "phone": "011/2615-131, 064/217-42-14"
          },
          {
            "name": "Veterinarska ambulanta i apoteka Zemun ‘ĆIRKOVIĆ’",
            "url": "https://veterinarska-ambulanta-zemun-cirkovic/",
            "address": "Gornjogradska 7M",
            "phone": "011/316 33 71, dežurni: 0-24h 064/119 42 85"
          },
          {
            "name": "Veterinarska ambulanta 'Vukoje'",
            "url": "https://www.instagram.com/vukoje_vet/",
            "address": "Pavla Vujisića 1A",
            "phone": "069 2871048"
          },
          {
            "name": "Vet Planet Clinic",
            "url": "https://vetplanet.rs/",
            "address": "Radnička 9",
            "phone": "011 3160555"
          },
          {
            "name": "Veterinarska Ordinacija Marjanov",
            "url": "/",
            "address": "Bregovita 11",
            "phone": "063 239880"
          }
        ],
        "batajnica": [
          {
            "name": "Ambulanta Ljuta Žirafa",
            "url": "https://www.ljutazirafa.rs/",
            "address": "Kralja Radoslava 36",
            "phone": "064 24 00 760, 011 40 90 893"
          },
          {
            "name": "Veterinarska ambulanta Sali Vet",
            "url": "/",
            "address": "Majora Zorana Radosavljevića 189",
            "phone": "011 8488 138, 064 3498 914"
          }
        ],
        "bežanijska_kosa": [
          {
            "name": "SemperaVet",
            "url": "https://www.instagram.com/sempera_vet/",
            "address": "Marka Čelebonovića bb",
            "phone": "011 4125-416, 064 1112-802"
          },
          {
            "name": "Dr Plum",
            "url": "https://drplum.com/",
            "address": "Danila Lekića 31",
            "phone": "063 27 39 14, 011 31 82 233"
          },
          {
            "name": "Charlie and Graff",
            "url": "https://www.charliegraff.com/",
            "address": "Dragiše Brašovana 9",
            "phone": "060 063 7003"
          },
          {
            "name": "Vet Svet",
            "url": "https://www.vetsvet.rs/",
            "address": "Majke Jugovića 4",
            "phone": "011/3617 327"
          }
        ],
        "bezanijska_kosa": [
          {
            "name": "SemperaVet",
            "url": "https://www.instagram.com/sempera_vet/",
            "address": "Marka Čelebonovića bb",
            "phone": "011 4125-416"
          },
          {
            "name": "Dr Plum",
            "url": "https://drplum.com/",
            "address": "Danila Lekića 31",
            "phone": "063 27 39 14"
          },
          {
            "name": "Charlie and Graff",
            "url": "https://www.charliegraff.com/",
            "address": "Dragiše Brašovana 9",
            "phone": "060 063 7003"
          },
          {
            "name": "Vet Svet",
            "url": "https://vetsvet.rs/",
            "address": "Nedeljka Gvozdenovića 14",
            "phone": "063 304859"
          }
        ],
        "karaburma": [
          {
            "name": "Veterinarska ambulanta Nećak",
            "url": "https://www.vetnecak.com/vetnecak/",
            "address": "Salvadora Aljendea 18",
            "phone": "011 297-0814"
          },
          {
            "name": "Golden Pet Vet",
            "url": "https://www.instagram.com/goldenpetvet/?hl=sr",
            "address": "Mirijevski bulevar 7b",
            "phone": "011 2970-362"
          },
          {
            "name": "Mondo Animale Beograd",
            "url": "https://www.facebook.com/MondoAnimaleBeograd/?locale=sr_RS",
            "address": "Stevana Hristića 1b",
            "phone": "060 0354831"
          },
          {
            "name": "VetKomplet",
            "url": "/",
            "address": "Bore Vukmirovića 12a",
            "phone": "011 275 45 91"
          },
          {
            "name": "Veterinarius Beograd",
            "url": "https://www.instagram.com/veterinarius_beograd/?hl=sr",
            "address": "Patrisa Lumumbe 26",
            "phone": "011 6901797"
          },
          {
            "name": "Fenrir 019",
            "url": "https://www.instagram.com/fenrir019_2veterinar_/",
            "address": "Banjičkih žrtava 36",
            "phone": "061 6051271"
          }
        ],
        "ugrinovci": [
          {
            "name": "Triarvet",
            "url": "https://www.triarvet.rs/",
            "address": "Zemunska 5. deo br. 12",
            "phone": "063 430 920"
          }
        ],
        "kumodraz": [
          {
            "name": "Vaterinarska ambulanta Caninus medic",
            "url": "https://dezurniveterinarbgd.com/",
            "address": "Žitna br. 13",
            "phone": "064 187-4835"
          }
        ],
  },
};
    

import { WashCards } from "./types"

export const washLocationsData: Record<string, WashCards[]> = {
  beograd: [
    {
      name: "Repionica",
      address: "Garsije Lorke 1",
      phone: "0637195371",
      website: "http://www.repionica.rs",
    },
    {
      name: "Puppy Shower",
      address: "Bulevar Zorana Đinđića 209",
      phone: "0638076911",
      website: "http://www.kupanjepasa.com",
    },
    {
      name: "WetPet",
      address: "Španskih boraca 22, između broja e i d lokal br. 2",
      phone: "065 8988098",
      website: "http://www.wetpetconcept.com",
    },
    {
      name: "Kupanjac",
      address: "Kapetan Mišina 2a",
      phone: "0641584838",
      website: "http://www.kupanjac.rs",
    },
  ],
  noviSad: [
    {
      name: "Dog Wash Bubble",
      address: "Bulevar cara Lazara 104",
      phone: "064 5935215",
      website: "/",
    },
    {
      name: "Džeki",
      address: "Radnička 31a",
      phone: "060 5090708",
      website: "http://www.dzeki.rs",
    },
  ],
  nis: [
    {
      name: "Dog spa Nais",
      address: "Cara Dušana 140a",
      phone: "0601555636",
      website: "/",
    },
  ],
  subotica: [
    {
      name: "Samouslužno kupanje pasa Subotica",
      address: "Trg Sinagoge 1a",
      phone: "061 2146474",
      website: "/",
    },
  ],
  kragujevac: [
    {
      name: "Samouslužna perionica za pse Snoopy",
      address: "Ljube Vučkovića 2, lokal 4",
      phone: "066 5370753",
      website: "/",
    },
  ],
};

interface BarData {
    name: string;
    website: string;
    address: string;
    phone: string;
  }
  
  interface BarsLocations {
    [key: string]: BarData[];
  }
  
  export const BARS_LOCATIONS: { [key: string]: BarData[] } = {
    "Vračar": [
      {
        name: "Bar restoran Komanda",
        website: "komanda.rs",
        address: "Ustanička 7",
        phone: "011/6242-754",
      },
      {
        name: "Burger bar Makedonac",
        website: "www.makedonacburegbar.com",
        address: "Golsvordijeva 6",
        phone: "011/403-64-99",
      },
      {
        name: "Ceger caffe restoran",
        website: "www.kafeceger.com",
        address: "Skerlićeva 20",
        phone: "011/4065-794",
      },
      {
        name: "Mala Kolubara",
        website: "www.malakolubara.rs",
        address: "Ivankovačka 2",
        phone: "061/22-00-550",
      },
    ],
    "Stari grad": [],
    "Savski venac": [],
    "Novi Beograd": [],
    "Voždovac": [],
    "Banovo brdo": [],
    "Zvezdara": [],
    "Dorćol": [],
    "Zemun": [],
  };
  
  
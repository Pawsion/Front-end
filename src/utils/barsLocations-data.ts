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
      website: "https://komanda.rs",
      address: "Ustanička 7",
      phone: "011/6242-754",
    },
    {
      name: "Burger bar Makedonac",
      website: "http://www.makedonacburegbar.com",
      address: "Golsvordijeva 6",
      phone: "011/403-64-99",
    },
    {
      name: "Ceger caffe restoran",
      website: "https://www.kafeceger.com",
      address: "Skerlićeva 20",
      phone: "011/4065-794",
    },
    {
      name: "Mala Kolubara",
      website: "https://www.malakolubara.rs",
      address: "Ivankovačka 2",
      phone: "061/22-00-550",
    },
  ],
  "Savski venac": [
    {
      name: "Franš",
      website: "https://frans.rs",
      address: "Bulevar oslobođenja 18a",
      phone: "065/2641-944",
    },
    {
      name: "Cafe Baguette",
      website: "/",
      address: "Birčaninova 7",
      phone: "011/36-71-866",
    },
    {
      name: "Restoran Dositej",
      website: "/",
      address: "Balkanska 45",
      phone: "069/691-434",
    },
    {
      name: "Caffe Pocerac",
      website: "/",
      address: "Miloša Pocerca 32",
      phone: "011/403-92-58",
    },
    {
      name: "Đenka Gastro Pub",
      website: "https://djenka.rs/",
      address: "Kosančićev venac 2",
      phone: "064/063/16-31",
    },
    {
      name: "Restoran Savski Venac",
      website: "https://restoransavskivenac.rs",
      address: "Birčaninova 16a",
      phone: "011/4071-553",
    },
  ],
  "Novi Beograd": [
    {
      name: "Restoran Bela Reka",
      website: "https://restoranbelareka.rs/",
      address: "Tošin bunar 179",
      phone: "011/6555-097",
    },
    {
      name: "Pivnica Žirafa 23",
      website: "/",
      address: "Milutina Milankovića 34",
      phone: "063/684-749",
    },
    {
      name: "369 bar & restaurant",
      website: "https://369barandrestaurant.rs/",
      address: "Bulevar maršala Tolbuhina 36",
      phone: "069/369-369-0",
    },
    {
      name: "Lavina Caffe & Cucina",
      website: "http://www.restoranlavina.rs/",
      address: "Đorđa Stanojevića 9v",
      phone: "011/6302-112",
    },
    {
      name: "Barka",
      website: "/",
      address: "Bulevar Zorana Đinđića 99",
      phone: "060/311-60-44",
    },
    {
      name: "Sushidream",
      website: "https://sushidream.rs/",
      address: "Bulevar Zorana Đinđića 6a",
      phone: "011/311-08-77",
    },
  ],
  "Stari grad": [
    {
      name: "Roll Bar",
      website: "https://www.rollbar.rs/",
      address: "Obilićev venac 1",
      phone: "062/203-090",
    },
    {
      name: "Kingash Pinsa Bar Pinseria",
      website: "/",
      address: "Cetinjska 15",
      phone: "063/372-702",
    },
    {
      name: "Snežana",
      website: "https://www.snezana.rs/",
      address: "Kneza Mihaila 50",
      phone: "011/2635-706",
    },
    {
      name: "Pomodoro Pizza",
      website: "https://pomodoro.rs/",
      address: "Džordža Vašingtona 38a",
      phone: "011/3345-405",
    },
    {
      name: "Klub Književnika",
      website: "https://klubknjizevnika.rs/",
      address: "Francuska 7",
      phone: "011/2627-931",
    },
    {
      name: "Ćevap kod Dekija",
      website: "http://www.cevap.rs/",
      address: "Strahinjića Bana 71",
      phone: "064/0000-505",
    },
  ],
  "Voždovac": [
    {
      name: "Bel Air Restoran",
      website: "/",
      address: "Vojvode Vlahovića 35h",
      phone: "011/45-27-876",
    },
    {
      name: "Coffee Casa",
      website: "/",
      address: "Vojvode Vlahovića 49",
      phone: "011/45-49-717",
    },
    {
      name: "Restoran Tradicija",
      website: "/",
      address: "Zaplanjska 57k",
      phone: "064/265-6789",
    },
    {
      name: "Restoran Rada",
      website: "/",
      address: "Kumodraška 170",
      phone: "011/2466-992",
    },
    {
      name: "Restoran Kovač",
      website: "https://restorankovac.com/",
      address: "Bulevar oslobođenja 221",
      phone: "011/2462-343",
    },
    {
      name: "Diwali",
      website: "https://diwali.rs",
      address: "Ljubićka 1b",
      phone: "011/3446-235",
    },
  ],
  "Banovo brdo": [
    {
      name: "Restaurant Maša Dom",
      website: "/",
      address: "Trebevićka 49",
      phone: "069/5615-614",
    },
    {
      name: "Skver 44",
      website: "/",
      address: "Požeška 44a",
      phone: "011/3541-084",
    },
    {
      name: "Posh Fish & Steak",
      website: "/",
      address: "Dobrinovićeva 1a",
      phone: "011/6702-023",
    },
    {
      name: "Spice",
      website: "https://www.spice.rs/",
      address: "Žarkovačka 21a",
      phone: "064/00-44-005",
    },
    {
      name: "Marcus 88",
      website: "/",
      address: "Nodilova 1",
      phone: "011/4023-266",
    },
    {
      name: "Počasna Tribina",
      website: "/",
      address: "Paštrovićeva 2",
      phone: "011/423-10-60",
    },
  ],
  "Zvezdara": [
    {
      name: "Sabor",
      website: "/",
      address: "Smederevski put 27b",
      phone: "011/2893-657",
    },
    {
      name: "Boketto Sushi Bar",
      website: "https://sushibarboketto.rs/",
      address: "Bulevar kralja Aleksandra 312",
      phone: "011/401-90-86",
    },
    {
      name: "Vrh Beograda",
      website: "https://www.vrhbeograda.rs/",
      address: "Volgina 18b",
      phone: "011/749-15-47",
    },
    {
      name: "Trattoria Cicciolina",
      website: "/",
      address: "Bregalnička 18",
      phone: "011/383-5675",
    },
    {
      name: "44° North Restaurant",
      website: "/",
      address: "Cvetanova ćuprija 24d",
      phone: "011/4060-018",
    },
    {
      name: "Dušanovo Carstvo",
      website: "/",
      address: "Vojvode Sime Popovića 11",
      phone: "063/527-222",
    },
  ],
  "Dorćol": [
    {
      name: "Bajloni Restoran",
      website: "/",
      address: "Bulevar despota Stefana 7",
      phone: "011/4073-351",
    },
    {
      name: "Leila Records & Books",
      website: "/",
      address: "Dobračina 59b",
      phone: "069/198-28-95",
    },
    {
      name: "Mister Monut",
      website: "/",
      address: "Gospodar Jevremova 38",
      phone: "065/334-02-85",
    },
    {
      name: "Komunale",
      website: "https://www.komunale.rs/",
      address: "Karađorđeva 2-4",
      phone: "011/401-02-22",
    },
    {
      name: "Tranzit",
      website: "/",
      address: "Karađorđeva 41",
      phone: "064/00-44-005",
    },
    {
      name: "Picerija Zaokret",
      website: "/",
      address: "Cetinjska 15",
      phone: "011/340-1004",
    },
  ],
  "Zemun": [
    {
      name: "Gabbiano Event Center",
      website: "/",
      address: "Kej oslobođenja bb",
      phone: "011/2606-607",
    },
    {
      name: "Kafana pod lozom 78",
      website: "/",
      address: "Hercegovačka 31e",
      phone: "011/316-44-07",
    },
    {
      name: "Šaran",
      website: "/",
      address: "Kej oslobođenja 53",
      phone: "011/2618-235",
    },
    {
      name: "Stara Carinarnica",
      website: "/",
      address: "Kej oslobođenja 31",
      phone: "011/2616-930",
    },
    {
      name: "Put Oko Sveta",
      website: "https://www.putokosveta.co.rs/",
      address: "Štrosmajerova 4",
      phone: "065/453-22-84",
    },
    {
      name: "Oklen Si Ti",
      website: "/",
      address: "Nikolaja Saltikova 37",
      phone: "011/429-06-70",
    },
  ],
};

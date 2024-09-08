export type NameListData = {
    title: string;
    description: string;
    names: string[];
    backgroundColor?: string;
    nameColor?: string;
    maleNames?: string[];
    femaleNames?: string[];
  };
  
  export const femaleDogNames: NameListData = {
    title: 'Ženska imena za pse',
    description: 'Tajna pronalaženja najjedinstvenijih imena za ženske pse je da pronađete ime sa ličnošću i šarmom. Ono treba da bude ženstveno, da ima snagu, deluje zabavno i samouvereno. Inspiracija mogu da vam budu omiljeni likovi iz filmova, knjiga, priroda, razna božanstva i još mnogo toga.',
    names: ['Frida', 'Xena', 'Gabi', 'Luna', 'Stela', 'Ava', 'Maza', 'Hera', 'Nera', 'Zoe'],
    backgroundColor: 'bg-namesPink',
    nameColor: 'text-namesFontPink', 
  };
  
  export const maleDogNames: NameListData = {
    title: 'Muška imena za pse',
    description: 'Kada su muška imena u pitanju, inspiraciju možete pronaći u superherojima, planetama, crtanim i filmskim likovima. Prepustite se mašti, granica ne postoji. Pogledajte spisak imena koje smo izdvojili za vas:',
    names: ['Astor', 'Bruno', 'Noa', 'Maks', 'Simba', 'Floyd', 'Ahil', 'Dante', 'Tank', 'Amon'],
    backgroundColor: 'bg-namesGreen', 
    nameColor: 'text-namesFontGreen', 
  };

  
  export const shortDogNames = {
    title: 'Kratka imena za pse',
    description: 'Imena sa jednim slogom su uvek dobitna kombinacija - imaju kratke i isprekidane zvuke zbog kojih psi brzo reaguju i lako ih razumeju. Nećete pogrešiti ni ako izaberete ime sa dva sloga. Sluh pasa je otprilike četiri puta osetljiviji od našeg, a imena sa dva sloga kada se izgovaraju stvaraju promenu u frekvenciji i tako privlače pažnju psa. Takođe, ime sa dva sloga omogućava naglašavanje, što pomaže u prikazivanju emocija. Na primer, kada prvi slog izgovarate višim tonom od drugog, izražavate naklonost. Ako počnete sa nižim tonom, a zatim pređete na viši, time pokazujete da ste nezadovoljni ponašanjem svog ljubimca. Evo nekoliko predloga za muška i ženska imena:',
    maleNames: [
      'Hari', 'Eros', 'Vito', 'Bolt', 'Mo', 'Aki', 'Don', 'Žil', 'Aga', 'Vili',
    ],
    femaleNames: [
      'Arja', 'Su', 'Boa', 'Dora', 'Joy', 'Ida', 'Aura', 'Ella', 'Mila', 'Eva'
    ]
  };
  

  export const powerfulDogNames = {
    title: 'Moćna imena za pse',
    description: 'Bez obzira da li govorimo o fizičkoj snazi, jakoj ličnosti ili karakteru, verujemo da postoje mnogi psi koji zaslužuju ovakva imena. Inspiraciju za moćna imena uvek možete potražiti u mitologiji, istorijskim ili filmskim ličnostima, herojima, kraljevskim dinastijama. Nadamo se da ćete među našim predlozima pronaći baš ono pravo.',
    maleNames: ['Grom', 'Don', 'Kan', 'Hanibal', 'Cezar', 'Oskar', 'Rambo', 'King', 'Macho', 'Kal'],
    femaleNames: ['Luna', 'Bjanka', 'Siena', 'Mona', 'Dina', 'Karma', 'Hera', 'Uli', 'Šila', 'Talia']
  };
  
  export const coolDogNames = {
    title: 'Cool imena za pse',
    description: 'Da li vaš pas odiše stilom? Da li je previše kul da bi jurio veverice? Bez obzira na razlog njegove impresivne pojave, dajte mu jedno od ovih imena koje će naterati lokalne mačke da im srce još jače lupa…',
    maleNames: ['Bono', 'Hogar', 'Yoda', 'Thor', 'Bandit', 'Ringo', 'Django', 'Iron', 'Argus', 'Vigor'],
    femaleNames: ['Dea', 'Valkira', 'Venus', 'Sky', 'Aria', 'Lea', 'Rea', 'Uma', 'Venera', 'Zena']
  };
  
  export const cuteDogNames = {
    title: 'Slatka imena za pse',
    description: 'U koliko imate male, slatke, čupave ili pomalo blesave pse, ovo je prava lista za vas.',
    maleNames: ['Hugo', 'Ogi', 'Fifi', 'Marli', 'Snupi', 'Lesi', 'Čupko', 'Srećko', 'Igi', 'Dexter'],
    femaleNames: ['Dora', 'Maša', 'Dolly', 'Cveta', 'Žana', 'Joy', 'Lajka', 'Pipi', 'Koko', 'Aura']
  };
  
  export const unusualDogNames = {
    title: 'Neobična imena za pse',
    description: 'Želite li da vaš pas ima jedinstveno, pamtljivo ime koje predstavlja njegovu ličnost? Napravili smo vam upravo takvu jednu listu. Koje god ime da izaberete, ne zaboravite da će uvek biti neko koga će zanimati pozadinska priča kako ste odabrali ime, tako da spremite se za pozornicu.',
    maleNames: ['Titan', 'Enigma', 'Hulk', 'Gonzo', 'Vega', 'Flojd', 'Bakster', 'Frodo', 'Kakao', 'Betoven'],
    femaleNames: ['Fleka', 'Arya', 'Matilda', 'Flavia', 'Kala', 'Astrid', 'Elektra', 'Elsa', 'Fiona', 'Vega']
  };
  
  export const funnyDogNames = {
    title: 'Smešna imena za pse',
    description: 'Kada ugledate svog psa uvek se oraspoložite i osmeh vam obasja lice. Zašto ne biste i drugima ulepšali dan na pomen njegovog imena? Ukoliko vaš pas podseća na neku hranu, ima karakter poznate ličnosti ili je baš sušta suptotnost od toga, a nosi njihovo ime, sigurno ćete izmamiti osmehe prisutnih. Garantovano ćete se i vi bolje osećati, a i psu će prijati pažnja i pozitivna energija. Neka vam naša lista bude smernica i inspiracija.',
    maleNames: ['Buzz', 'Šejtan', 'Chase', 'Mango', 'Ludvig', 'Joda', 'Guliver', 'Napoleon', 'Romeo', 'Frodo'],
    femaleNames: ['Šana', 'Flekica', 'Alka', 'Tačka', 'Monana', 'Sushi', 'Tic Tac', 'Barbie', 'Waffles', 'Lollipop']
  };
  
  export const serbianDogNames = {
    title: 'Srpska imena za pse',
    description: 'Ukoliko želite da ime vašeg novog člana porodice bude srpskog porekla, pripremili smo vam sledeće predloge. Sigurno će, bre, neko da vam se svidi.',
    maleNames: ['Vasa', 'Miško', 'Mita', 'Sava', 'Žika', 'Đole', 'Maksa', 'Mićko', 'Bole', 'Ogi'],
    femaleNames: ['Una', 'Kata', 'Ljupka', 'Bosa', 'Ema', 'Hana', 'Jana', 'Lara', 'Taša', 'Mona']
  };
  
  export const italianDogNames = {
    title: 'Italijanska imena za pse',
    description: 'Ukoliko razmišljate da ime vašeg novog krznenog prijatelja bude italijanskog porekla, pripremili smo vam sledeću listu. Mamma mia!',
    maleNames: ['Ugo', 'Benito', 'Diego', 'Roko', 'Espresso', 'Fabio', 'Fausto', 'Lorenco', 'Luiđi', 'Lupo'],
    femaleNames: ['Aria', 'Aurora', 'Dona', 'Karina', 'Kontesa', 'Izabela', 'Laura', 'Olimpia', 'Bianca', 'Stella']
  };
  
  export const turkishDogNames = {
    title: 'Turska imena za pse',
    description: 'Ukoliko želite da ime vašeg novog člana porodice bude turskog porekla, pripremili smo vam sledeće predloge. Kolay gelsin!',
    maleNames: ['Azma', 'Bolat', 'Hamdi', 'Furat', 'Jefi', 'Kadri', 'Kara', 'Kurt', 'Sadik', 'Zeya'],
    femaleNames: ['Amira', 'Anbar', 'Dunay', 'Ela', 'Fadila', 'Sema', 'Karima', 'Leyla', 'Malak', 'Verda']
  };
  
  export const americanDogNames = {
    title: 'Američka imena za pse',
    description: 'Ukoliko razmišljate da ime vašeg novog vragolana bude američkog porekla, pripremili smo vam sledeću listu. Good luck!',
    maleNames: ['Max', 'Duke', 'Rocky', 'Billy', 'Buddy', 'Blacky', 'Bronx', 'Rex', 'Teddy', 'Fluffy'],
    femaleNames: ['Alice', 'Maggie', 'Betty', 'Bonnie', 'Molly', 'Candy', 'Daisy', 'Sophie', 'Funny', 'Lucy']
  };
  
  export const russianDogNames = {
    title: 'Ruska imena za pse',
    description: 'Ukoliko želite da ime vašeg novog psa bude ruskog porekla, pripremili smo vam nekoliko predloga. Ни пуха ни пера!',
    maleNames: ['Aleksej', 'Anton', 'Grigori', 'Feliks', 'Fjodor', 'Misha', 'Oleg', 'Pavlov', 'Ratibor', 'Šarik'],
    femaleNames: ['Anika', 'Daša', 'Kalina', 'Kira', 'Lada', 'Lorena', 'Maša', 'Nadia', 'Njuša', 'Saša']
  };
  
  export const englishDogNames = {
    title: 'Engleska imena za pse',
    description: 'Ukoliko želite da ime vašeg novog psa bude engleskog porekla, pripremili smo vam nekoliko predloga. Break a leg!',
    maleNames: ['Charlie', 'Arthur', 'Bobby', 'King', 'Prince', 'Duke', 'Alfie', 'Milo', 'Teddy', 'Craig'],
    femaleNames: ['Poppy', 'Daisy', 'Ruby', 'Molly', 'Willow', 'Rosie', 'Linda', 'Kelly', 'Ruth', 'Milly']
  };
  
  export const croatianDogNames = {
    title: 'Hrvatska imena za pse',
    description: 'Ukoliko želite da ime vašeg novog psa bude hrvatskog porekla, pripremili smo vam nekoliko zanimljivih imena. Sretan ulov!',
    maleNames: ['Rio', 'Oliver', 'Leo', 'Medo', 'Riki', 'Bruno', 'Ante', 'Dado', 'Mrga', 'Vito'],
    femaleNames: ['Bea', 'Lala', 'Lili', 'Kira', 'Ina', 'Kala', 'Cvita', 'Tia', 'Dea', 'Tara']
  };
  
  
  
  
  
  export const allNameLists = [
    femaleDogNames,
    maleDogNames,
    shortDogNames,
    powerfulDogNames,
    coolDogNames,
    cuteDogNames,
    unusualDogNames,
    funnyDogNames,
    serbianDogNames,
    italianDogNames,
    turkishDogNames,
    americanDogNames,
    russianDogNames,
    englishDogNames,
    croatianDogNames
  ];
  
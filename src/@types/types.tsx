/* eslint-disable @typescript-eslint/no-unused-vars */
type SuperheroProps = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  },
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  },
  biography: {
    fullName: string;
    alterEgos: string;
    placeOfBirth: string;
    publisher: string;
    alignment: string;
  },
  work: {
    occupation: string;
  },
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
};

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Favorites: undefined;
  Hero: {
    heroId: number;
  };
};

type SuperheroListProps = {
  id: number;
  name: string;
  publisher: string;
  image: string;
};

type FavoriteStorageProps = {
  [id: string]: {
    data: SuperheroListProps,
  }
};

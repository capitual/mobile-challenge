export type HeroTypename = 'Heroes' | 'Hero';

interface HeroBiography {
  aliases: string[];
  alignment: string;
  alterEgos: string;
  firstAppearance: string;
  fullName: string;
  publisher: string;
}

interface HeroConnections {
  groupAffiliation: string;
  relatives: string;
}

interface HeroImages {
  lg: string;
  sm: string;
}

interface HeroPowerstats {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
}

interface HeroWork {
  base: string;
}

interface HeroAppearance {
  race: string;
  height: string[];
  weight: string[];
}

export interface Hero {
  __typename: HeroTypename;
  appearance: HeroAppearance;
  biography: HeroBiography;
  connections: HeroConnections;
  id: number;
  images: HeroImages;
  name: string;
  powerstats: HeroPowerstats;
  work: HeroWork;
}

export interface Heroes {
  id: number;
  name: string;
  biography: Pick<HeroBiography, 'fullName'>;
  images: Pick<HeroImages, 'sm'>
}

export interface AllHeroes {
  all: Heroes[];
}

export interface GetHero {
  getHero: Hero;
}

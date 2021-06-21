interface Hero {
    id: string,
    name: string,
    powerstats: PowerStats,
    biography: Biography,
    image: Image,
}

export interface HeroName {
    name: string
}

export interface PowerStats {
    intelligence: string,
    strength: string,
    durability: string,
    power: string,
    speed: string,
}

export interface Image {
    url: string,
}

export interface Biography {
    'place-of-birth': string,
    'first-appearance': string,
    publisher: string,
}

export default Hero;
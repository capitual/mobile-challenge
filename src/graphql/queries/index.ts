import { gql } from '@apollo/client';

export const ALL_HEROES = gql`
  query Heroes {
    all @rest(type: "Heroes", path: "all.json") {
      id
      name
      biography {
        fullName
      }
      images {
        sm
      }
    }
  }
`;

export const GET_HERO = gql`
  query Hero($heroId: String!) {
    getHero(id: $heroId) @rest(type: "Hero", path: "id/:id.json") {
      id
      name
      appearance {
        race
        height
        weight
      }
      powerstats {
        intelligence
        strength
        speed
        durability
        power
        combat
      }
      biography {
        fullName
        alterEgos
        aliases
        firstAppearance
        publisher
        alignment
      }
      work {
        base
      }
      connections {
        groupAffiliation
        relatives
      }
      images {
        sm
        lg
      }
    }
  }
`;

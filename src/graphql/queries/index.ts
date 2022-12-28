import { gql } from '@apollo/client';

export const ALL_HEROES = gql`
  query Heroes {
    all @rest(type: "Heroes", path: "all.json") {
      id
      name
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
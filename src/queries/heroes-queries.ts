import { gql } from '@apollo/client';

export const HEROES_QUERY = gql`
  query Heroes {
    all {
      id
    }
  }
`;

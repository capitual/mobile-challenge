import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

import { URL } from './constants';

const httpLink = new RestLink({
  uri: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

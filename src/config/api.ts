import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { URL } from './constants';

const restLink = new RestLink({
  uri: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseTransformer: async (response: any) => response.json().then(({ data }) => data),
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
  },
});

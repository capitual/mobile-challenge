import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { URL } from './constants';

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  fetchOptions: {
    method: 'GET',
  },
  useGETForQueries: true,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

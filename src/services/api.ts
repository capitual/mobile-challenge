import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api/',
  headers: {},
});

import axios from "axios";

// token 2252287794903223

//base url https://superheroapi.com/api

export const key = "2252287794903223";

const api = axios.create({
  baseURL: `https://superheroapi.com/api/${key}/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default api;

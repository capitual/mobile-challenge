import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api',
});

export default api;

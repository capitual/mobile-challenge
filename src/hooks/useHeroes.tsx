/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { HeroProps } from '../@types';
import { API } from '../services/api';

function useHeroes() {
  const [data, setdata] = useState<HeroProps[]>([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  async function getHeroes() {
    try {
      const response = await API.get('all.json');
      setdata(response.data as HeroProps[]);

      setloading(false);
    } catch (e) {
      seterror(e);
    }
  }

  useEffect(() => {
    getHeroes();
  }, []);

  return { data, loading, error };
}
export default useHeroes;

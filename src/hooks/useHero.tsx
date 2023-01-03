/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import { HeroProps } from '../@types';
import { API } from '../services/api';

function useHero(id: number) {
  const [data, setdata] = useState<HeroProps>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  async function getHero() {
    try {
      const response = await API.get(`id/${id}.json`);
      console.log('aquileo', response);
      setdata(response.data as HeroProps);

      setloading(false);
    } catch (e) {
      seterror(e);
    }
  }

  useEffect(() => {
    getHero();
  }, []);

  return { data, loading, error };
}
export default useHero;

import React, {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';

import { Alert } from 'react-native';

import api from '../services/api';

interface SuperheroesProviderProps {
  children: ReactNode;
}

interface SuperheroesListProps {
  id: number;
  name: string;
  publisher: string;
  image: string;
}

interface SuperheroesContextData {
  superheroes: SuperheroesListProps[];
}

const SuperheroesContext = createContext<SuperheroesContextData>({} as SuperheroesContextData);

export function SuperheroesProvider({ children }: SuperheroesProviderProps): JSX.Element {
  const [superheroes, setSuperheroes] = useState<SuperheroesListProps[]>([]);

  // Fetch API
  async function fetchSuperheroes(): Promise<void> {
    const { data } = await api
      .get<SuperheroProps[]>('/all.json');

    if (data.length > 0) {
      data.map((hero: SuperheroProps) => setSuperheroes((state) => [...state, {
        id: hero.id,
        name: hero.name,
        publisher: hero.biography.publisher,
        image: hero.images.sm,
      }]));
    }
  }

  try {
    // Call fetch function on page load
    useEffect(() => {
      fetchSuperheroes();
    }, []);
  } catch {
    Alert.alert('Not possible to load data from API!');
  }

  return (
    <SuperheroesContext.Provider
      value={{ superheroes }}
    >
      {children}
    </SuperheroesContext.Provider>
  );
}

export function useSuperheroes(): SuperheroesContextData {
  const context = useContext(SuperheroesContext);

  return context;
}

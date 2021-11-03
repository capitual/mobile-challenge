import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToFavorites(hero: SuperheroProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@superheroes:favorites');
    const oldFavorites = data ? (JSON.parse(data) as FavoriteStorageProps) : {};

    const newFavorite = {
      [hero.id]: {
        data: {
          id: hero.id,
          name: hero.name,
          publisher: hero.biography.publisher,
          image: hero.images.sm,
        },
      },
    };

    await AsyncStorage.setItem(
      '@superheroes:favorites',
      JSON.stringify({
        ...newFavorite,
        ...oldFavorites,
      }),
    );
  } catch (error) {
    throw new Error('Error on saving to Local Storage!');
  }
}

export async function removeFromFavorites(id: number): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@superheroes:favorites');
    const favorites = data ? (JSON.parse(data) as FavoriteStorageProps) : {};

    if (favorites[id]) {
      delete favorites[id];
    }
    // delete favorites.id;

    await AsyncStorage.removeItem('@superheroes:favorites');

    await AsyncStorage.setItem(
      '@superheroes:favorites',
      JSON.stringify({
        ...favorites,
      }),
    );
  } catch (error) {
    throw new Error('Error on saving to Local Storage!');
  }
}

export async function loadFavorites(): Promise<SuperheroListProps[]> {
  try {
    const data = await AsyncStorage.getItem('@superheroes:favorites');
    const storage = data ? (JSON.parse(data) as FavoriteStorageProps) : {};

    const favorites = Object
      .keys(storage)
      .map((hero) => ({
        ...storage[hero].data,
      }));

    return favorites;
  } catch (error) {
    throw new Error('Error on loading from Local Storage!');
  }
}

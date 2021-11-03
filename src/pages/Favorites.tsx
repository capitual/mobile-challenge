import React, { useEffect, useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import { Header } from '../components/Header';
import { Load } from '../components/Load';
import Pagination from '../components/Pagination';
import { HomeHeroCard } from '../components/HomeHeroCard';
import { EmptyList } from '../components/EmptyList';

import { loadFavorites } from '../hooks/useFavorites';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export function Favorites({ navigation }: Props) {
  const [favorites, setFavorites] = useState<SuperheroListProps[]>([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState<SuperheroListProps[]>([]);
  const [pageSuperheroes, setPageSuperheroes] = useState<SuperheroListProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const flatlistRef = useRef<FlatList>(null);

  // Get favorites from Local Storage
  useEffect(() => {
    async function loadStorageData() {
      const storage = await loadFavorites();

      setFavorites(storage);
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      loadStorageData();
    });

    return willFocusSubscription;
  }, []);

  // Set filtered to all superheroes after load
  useEffect(() => {
    if (favorites.length > 0) {
      setFilteredSuperheroes(favorites);
    }
  }, [favorites]);

  // Handle page change
  function handlePageChange(selectedPage: number) {
    setPage(selectedPage);
  }

  // Go to hero's page
  function handleHeroSelect(id: number) {
    navigation.navigate('Hero', { heroId: id });
  }

  // Handle pageSuperheroes on load and on page change
  useEffect(() => {
    setPageSuperheroes([]);

    filteredSuperheroes
      .slice(
        ((page - 1) * (10)),
        ((page * 10) - 1) < favorites.length
          ? (page * 10)
          : (favorites.length),
      )
      .map((hero) => setPageSuperheroes((state) => [...state, hero]));

    setIsLoading(false);
  }, [filteredSuperheroes, page]);

  useEffect(() => {
    if (pageSuperheroes.length > 0) {
      flatlistRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [pageSuperheroes]);

  // Return to previous page
  function handleReturn() {
    navigation.goBack();
  }

  if (isLoading) {
    return <Load />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header onReturn={handleReturn} />

      <View style={styles.wrapper}>
        <>
          <Pagination
            totalCountRegisters={filteredSuperheroes.length}
            currentPage={page}
            onPageChange={handlePageChange}
          />

          <View style={styles.heroes}>
            <FlatList
              ref={flatlistRef}
              data={pageSuperheroes}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <HomeHeroCard
                  data={item}
                  onPress={() => { handleHeroSelect(item.id); }}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heroes: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React, { useEffect, useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import { useSuperheroes } from '../hooks/useSuperheroes';

import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { SearchInput } from '../components/SearchInput';
import Pagination from '../components/Pagination';
import { HomeHeroCard } from '../components/HomeHeroCard';
import { EmptyList } from '../components/EmptyList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
  const [filteredSuperheroes, setFilteredSuperheroes] = useState<SuperheroListProps[]>([]);
  const [pageSuperheroes, setPageSuperheroes] = useState<SuperheroListProps[]>([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const flatlistRef = useRef<FlatList>(null);

  const { superheroes } = useSuperheroes();

  // Set filtered to all superheroes after load
  useEffect(() => {
    if (superheroes.length > 0) {
      setFilteredSuperheroes(superheroes);
    }
  }, [superheroes]);

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
        ((page * 10) - 1) < superheroes.length
          ? (page * 10)
          : (superheroes.length),
      )
      .map((hero) => setPageSuperheroes((state) => [...state, hero]));

    setIsLoading(false);
  }, [filteredSuperheroes, page]);

  useEffect(() => {
    if (pageSuperheroes.length > 0) {
      flatlistRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [pageSuperheroes]);

  // Handle search by name
  useEffect(() => {
    setFilteredSuperheroes([]);
    setPage(1);

    superheroes
      .filter((hero) => hero.name.includes(searchName))
      .map((filteredHero) => setFilteredSuperheroes((state) => [
        ...state,
        filteredHero,
      ]));
  }, [searchName]);

  function handleOpenFavorites() {
    navigation.navigate('Favorites');
  }

  if (isLoading) {
    return <Load />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header isHome openFavorites={handleOpenFavorites} />

      <SearchInput setSearchName={setSearchName} />

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
              ListEmptyComponent={<EmptyList />}
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

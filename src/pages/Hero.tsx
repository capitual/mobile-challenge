import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { HeroAppearanceCard } from '../components/HeroAppearanceCard';
import { HeroPowerStatsCard } from '../components/HeroPowerStatsCard';
import { HeroBiographyCard } from '../components/HeroBiographyCard';

import { loadFavorites, removeFromFavorites, saveToFavorites } from '../hooks/useFavorites';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import api from '../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Hero'>;

export function Hero({ route, navigation }: Props) {
  const [hero, setHero] = useState<SuperheroProps>({} as SuperheroProps);
  const [nameColor, setNameColor] = useState(colors.yellow);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get hero ID from params
  const {
    heroId,
  } = route.params;

  // Fetch API with hero ID
  async function fetchHero(): Promise<void> {
    const { data } = await api
      .get<SuperheroProps>(`/id/${heroId}.json`);

    if (!data) {
      return setIsLoading(true);
    }

    setHero(data);
  }

  // Return to previous page
  function handleReturn() {
    navigation.goBack();
  }

  useEffect(() => {
    async function loadStorageData() {
      const favorites = await loadFavorites();

      if (favorites.filter((favorite) => favorite.id === heroId).length > 0) {
        setIsFavorite(true);
      }
    }

    setTimeout(() => {
      loadStorageData();
    }, 1000);
  }, [heroId, isFavorite]);

  // Call fetch function on page load
  useEffect(() => {
    setTimeout(() => {
      fetchHero();
    }, 2000);
  }, []);

  // Verify hero alignment to match name text color
  useEffect(() => {
    if (!(
      hero
      && Object.keys(hero).length === 0
      && Object.getPrototypeOf(hero) === Object.prototype
    )) {
      if (hero.biography.alignment === 'good') {
        setNameColor(colors.green);
      } else if (hero.biography.alignment === 'bad') {
        setNameColor(colors.red);
      }

      setIsLoading(false);
    }
  }, [hero]);

  if (isLoading) {
    return <Load />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header onReturn={handleReturn} />

      <View style={styles.nameBox}>
        <Text style={[styles.nameText, { color: nameColor }]}>
          {hero.name}
        </Text>
      </View>

      {isFavorite ? (
        <View style={styles.favoriteButtonBox}>
          <TouchableOpacity
            style={styles.favoriteRemoveButton}
            onPress={() => {
              removeFromFavorites(heroId);
              setIsFavorite(false);
            }}
          >
            <Text style={styles.buttonText}>Remove from Favorite</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.favoriteButtonBox}>
          <TouchableOpacity
            style={styles.favoriteAddButton}
            onPress={() => {
              saveToFavorites(hero);
              setIsFavorite(true);
            }}
          >
            <Text style={styles.buttonText}>Add to Favorites</Text>
          </TouchableOpacity>
        </View>

      )}

      <ScrollView>
        <View style={styles.wrapper}>
          <HeroAppearanceCard appearance={hero.appearance} image={hero.images.md} />

          <HeroPowerStatsCard powerstats={hero.powerstats} />

          <HeroBiographyCard biography={hero.biography} work={hero.work} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favoriteButtonBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 40,
    backgroundColor: colors.background_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  favoriteAddButton: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  favoriteRemoveButton: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  nameBox: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: colors.background_secondary,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.teal,
    fontFamily: fonts.heading,
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },

});

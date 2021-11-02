import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { HeroAppearanceCard } from '../components/HeroAppearanceCard';
import { HeroPowerStatsCard } from '../components/HeroPowerStatsCard';
import { HeroBiographyCard } from '../components/HeroBiographyCard';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import api from '../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Hero'>;

export function Hero({ route, navigation }: Props) {
  const [hero, setHero] = useState<SuperheroProps>({} as SuperheroProps);
  const [nameColor, setNameColor] = useState(colors.yellow);
  const [isLoading, setIsLoading] = useState(true);

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

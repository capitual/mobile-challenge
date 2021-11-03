import React from 'react';

import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

import { SuperheroesProvider } from './src/hooks/useSuperheroes';

import Routes from './src/routes';
import colors from './src/styles/colors';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  // Wait untill fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SuperheroesProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <Routes />
    </SuperheroesProvider>
  );
}

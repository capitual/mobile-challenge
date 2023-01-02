import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { HeroProvider } from './src/context/HeroContext';
import Routes from './src/routes'


export default function App() {
  return (
    <HeroProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </HeroProvider>
  );
}



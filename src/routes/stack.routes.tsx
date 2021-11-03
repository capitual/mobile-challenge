import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { Hero } from '../pages/Hero';
import { Favorites } from '../pages/Favorites';

import colors from '../styles/colors';

export const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Hero"
        component={Hero}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;

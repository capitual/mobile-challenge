import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileHeroDashScreen from './screens/profileHeroDashScreen';
import DetailsHeroScreen from './screens/detaisHeroScreen';

const StackNav = createNativeStackNavigator();

function MainRoute() {
  return (
    <StackNav.Navigator
      initialRouteName="profileHeroDashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen
        name="profileHeroDashScreen"
        component={ProfileHeroDashScreen}
      />
      <StackNav.Screen name="detaisHeroScreen" component={DetailsHeroScreen} />
    </StackNav.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}

export default Routes;

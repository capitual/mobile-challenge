import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileHero, ProfileHeroDetails } from '../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function Public() {
  return (
    <Navigator initialRouteName="ProfileHero" screenOptions={{ headerShown: false }}>
      <Screen name="ProfileHero" component={ProfileHero} />
      <Screen name="ProfileHeroDetails" component={ProfileHeroDetails} />
    </Navigator>
  );
}

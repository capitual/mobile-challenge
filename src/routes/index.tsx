import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Public from './public';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Public" screenOptions={{ headerShown: false }}>
        <Screen name="Public" component={Public} />
      </Navigator>
    </NavigationContainer>
  );
}

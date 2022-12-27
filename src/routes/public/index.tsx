import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/public/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Public() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

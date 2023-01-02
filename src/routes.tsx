import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import HeroDetailsScreen from "./screens/HeroDetailsScreen";

import { animConfig, screenOptions } from "./styles/Theme/theme";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: null,
          headerShown: false,
          transitionSpec: {
            open: animConfig,
            close: animConfig,
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={HeroDetailsScreen}
        options={{
          title: null,
          headerShown: false,
          transitionSpec: {
            open: animConfig,
            close: animConfig,
          },
        }}
      />
    </Stack.Navigator>
  );
}

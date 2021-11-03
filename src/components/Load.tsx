import React from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Load() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Loading...
      </Text>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text_primary,
    fontFamily: fonts.heading,
  },
  animation: {
    backgroundColor: colors.background,
    width: '100%',
    height: 'auto',
  },
});

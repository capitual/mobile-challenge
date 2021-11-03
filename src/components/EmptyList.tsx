import React from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Search again!
      </Text>
      <Text style={styles.emoji}>
        😥
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text_secondary,
    fontFamily: fonts.heading,
  },
  emoji: {
    fontSize: 50,
    marginTop: 80,
  },
});

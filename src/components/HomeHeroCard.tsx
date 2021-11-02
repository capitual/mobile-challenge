import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import {
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HomeHeroCardProps extends RectButtonProps {
  data: {
    name: string;
    publisher: string;
    image: string;
  }
}

export const HomeHeroCard = ({ data, ...rest }: HomeHeroCardProps) => (
  <RectButton
    style={styles.container}
    {...rest}
  >
    <Image
      source={{
        uri: data.image,
      }}
      style={styles.image}
    />

    <View style={styles.textContainer}>
      <Text style={styles.title}>
        Name:
      </Text>
      <Text style={styles.name}>
        {data.name}
      </Text>
      <Text style={styles.title}>
        Publisher:
      </Text>
      <Text style={styles.publisher}>
        {data.publisher}
      </Text>
    </View>
  </RectButton>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 60,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'flex-start',
    color: colors.text_primary,
    fontFamily: fonts.heading,
    paddingLeft: 28,
  },
  name: {
    color: colors.teal,
    fontFamily: fonts.heading,
  },
  publisher: {
    color: colors.light_purple,
    fontFamily: fonts.text,
  },
});

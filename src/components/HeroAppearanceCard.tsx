import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeroAppearanceCardProps {
  appearance: SuperheroProps['appearance'];
  image: string;
}

export function HeroAppearanceCard({ appearance, image }: HeroAppearanceCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.appearanceContent}>
        <View style={styles.appearanceItem}>
          <Text style={styles.title}>
            Gender:
          </Text>
          <Text style={styles.text}>
            {appearance.gender}
          </Text>
        </View>
        <View style={styles.appearanceItem}>
          <Text style={styles.title}>
            Race:
          </Text>
          <Text style={styles.text}>
            {appearance.race}
          </Text>
        </View>
        <View style={styles.appearanceItem}>
          <Text style={styles.title}>
            Height:
          </Text>
          <Text style={styles.text}>
            {appearance.height[0]}
            &quot;
            {' '}
            /
            {' '}
            {appearance.height[1]}
          </Text>
        </View>
        <View style={styles.appearanceItem}>
          <Text style={styles.title}>
            Weight:
          </Text>
          <Text style={styles.text}>
            {appearance.weight[0]}
            {' '}
            /
            {' '}
            {appearance.weight[1]}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
  image: {
    height: '100%',
    width: '50%',
    borderRadius: 8,
  },
  appearanceContent: {
    height: '100%',
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  appearanceItem: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.heading,
    color: colors.text_primary,
    alignSelf: 'flex-start',
    paddingLeft: 18,
  },
  text: {
    fontSize: 16,
    color: colors.text_secondary,
    fontFamily: fonts.text,
    alignSelf: 'center',
    padding: 10,
  },
});

import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeroBiographyCardProps {
  biography: SuperheroProps['biography'];
  work: SuperheroProps['work'];
}

export function HeroBiographyCard({ biography, work }: HeroBiographyCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
        Biography
      </Text>
      <View style={styles.appearanceItem}>
        <Text style={styles.title}>
          Full Name:
        </Text>
        <Text style={styles.text}>
          {biography.fullName === '' ? '-' : biography.fullName}
        </Text>
      </View>
      <View style={styles.appearanceItem}>
        <Text style={styles.title}>
          Alter Egos:
        </Text>
        <Text style={styles.text}>
          {biography.alterEgos}
        </Text>
      </View>
      <View style={styles.appearanceItem}>
        <Text style={styles.title}>
          Occupation:
        </Text>
        <Text style={styles.text}>
          {work.occupation}
        </Text>
      </View>
      <View style={styles.appearanceItem}>
        <Text style={styles.title}>
          Publisher:
        </Text>
        <Text style={styles.text}>
          {biography.publisher}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
  },
  appearanceItem: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.text_primary,
    alignSelf: 'center',
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

import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import logoSuperhero from '../assets/superhero.png';

import colors from '../styles/colors';

interface HeaderProps {
  isWelcome?: boolean;
  isHome?: boolean;
  onReturn?: () => void;
  openFavorites?: () => void;
}

export function Header({
  isWelcome, isHome, onReturn, openFavorites,
}: HeaderProps) {
  return (
    <>
      {isWelcome && (
      <View style={styles.containerPrimary}>
        <Image
          source={logoSuperhero}
          style={styles.superhero}
        />
      </View>
      )}

      {isHome && (
        <View style={styles.containerSecondary}>
          <Image
            source={logoSuperhero}
            style={styles.superhero}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={openFavorites}
          >
            <Feather name="star" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      )}

      {!isWelcome && !isHome && (
        <View style={styles.containerSecondary}>
          <Image
            source={logoSuperhero}
            style={styles.superhero}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onReturn}
          >
            <Feather name="arrow-left-circle" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerPrimary: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 20,
  },
  containerSecondary: {
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },
  superhero: {
    width: 240,
    height: 60,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10,
    height: 40,
    width: 40,
    marginRight: 20,
  },
  buttonIcon: {
    fontSize: 36,
    color: colors.teal,
  },
});

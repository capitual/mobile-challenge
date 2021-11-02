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
import logoSH from '../assets/sh.png';
import colors from '../styles/colors';

interface HeaderProps {
  isWelcome?: boolean;
  onReturn?: () => void;
}

export function Header({ isWelcome, onReturn }: HeaderProps) {
  return (
    <View style={
      isWelcome
        ? styles.containerPrimary
        : styles.containerSecondary
      }
    >
      <Image
        source={logoSuperhero}
        style={styles.superhero}
      />

      {!isWelcome && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onReturn}
        >
          <Feather name="arrow-left-circle" style={styles.buttonIcon} />
        </TouchableOpacity>
      )}
    </View>
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

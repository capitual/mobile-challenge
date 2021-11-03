import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Header } from '../components/Header';

import welcomeImg from '../assets/welcome.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function Welcome({ navigation }: Props) {
  function handleStart() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header isWelcome />

      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Welcome
        </Text>

        <Text style={styles.subtitle}>
          Search multiple
          {' '}
          {'\n'}
          universes superheroes
          {' '}
          {'\n'}
          on your phone

        </Text>

        <Image
          source={welcomeImg}
          style={styles.image}
          resizeMode="contain"
        />

      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: Dimensions.get('window').height * 0.7,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: colors.background_secondary,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text_primary,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: colors.text_secondary,
    fontFamily: fonts.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.8,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.teal,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.button_text,
  },
});

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import { client, Colors } from './config';
import { Routes } from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <ApolloProvider client={client}>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor={Colors.BLACK}
            />

            <Routes />
          </ApolloProvider>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

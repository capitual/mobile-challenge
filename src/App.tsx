import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import { client, Colors } from './config';
import { Routes } from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={Colors.BLACK}
          />

          <Routes />
        </ApolloProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

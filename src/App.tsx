import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';

function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar translucent barStyle="light-content" />

        <Routes />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;

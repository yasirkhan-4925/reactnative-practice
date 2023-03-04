/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/HomeScreen';
import FirstAnimated from './src/FirstAnimated';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />

      {/* <HomeScreen /> */}
      <FirstAnimated />
    </SafeAreaView>
  );
}

export default App;

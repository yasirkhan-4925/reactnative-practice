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
import ScrollViewComponent from './src/ScrollView';
import ChatScreen from './src/ChatScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      {/* <HomeScreen /> */}
      {/* <FirstAnimated /> */}
      {/* <ScrollViewComponent /> */}
      <ChatScreen/>
    </SafeAreaView>
  );
}

export default App;

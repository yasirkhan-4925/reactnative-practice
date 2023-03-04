import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

function HomeScreen() {
  return <Text>This is text</Text>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    height: 10,
    width: 10,
  },
});

export default HomeScreen;

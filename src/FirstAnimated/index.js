import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');

function FirstAnimated() {
  const scaleValue = useSharedValue(0);
  const borderRadius = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}],
      borderRadius: borderRadius.value,
    };
  });

  useEffect(() => {
    scaleValue.value = withRepeat(withTiming(1, {duration: 1000}), -1, true);
    borderRadius.value = withSequence(
      withRepeat(
        withTiming(50, {duration: 1000}),
        withTiming(0, {duration: 1000}),
        -1,
        true,
      ),
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 300,
    width: 300,
    backgroundColor: 'purple',
  },
});

export default FirstAnimated;

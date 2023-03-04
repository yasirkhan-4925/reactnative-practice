import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const data = [
  {
    color: 'purple',
  },
  {color: 'blue'},
  {color: 'green'},
];

const ScrollItem = ({color, translatex, index}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translatex.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMPs,
    );

    const borderRadius = interpolate(
      translatex.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [300, 0, 300],
      Extrapolate.CLAMPs,
    );

    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translatex.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [700, 0, -700],
      Extrapolate.CLAMPs,
    );

    const translateX = interpolate(
      translatex.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [700, 0, -700],
      Extrapolate.CLAMPs,
    );

    return {
      transform: [{translateY}, {translateX}],
    };
  });

  return (
    <>
      <View style={[styles.scrollItemContainer, {backgroundColor: color}]}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Animated.Text
            style={[
              {color: 'black', fontSize: 30, fontWeight: 'bold'},
              animatedTextStyle,
            ]}>
            My text
          </Animated.Text>
        </Animated.View>
      </View>
    </>
  );
};

const ScrollViewComponent = () => {
  const translatex = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translatex.value = event.contentOffset.x;
  });

  return (
    <>
      {/* <View style={styles.container}></View> */}
      <View style={styles.container}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {data?.map((item, index) => (
            <>
              <ScrollItem
                key={index}
                translatex={translatex}
                index={index}
                color={item.color}
              />
            </>
          ))}
        </Animated.ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollItemContainer: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScrollViewComponent;

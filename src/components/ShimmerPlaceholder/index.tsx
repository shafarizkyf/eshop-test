import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const ShimmerPlaceholder = ({
  height = 20,
  width = 100,
  borderRadius = 8,
}) => {
  const translateX = useSharedValue(-width);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, {duration: 1000}),
      -1, // infinite
      false,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View
      style={[
        styles.container,
        {
          height,
          width,
          borderRadius,
        },
      ]}>
      <Animated.View style={[styles.shimmer, shimmerStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    position: 'relative',
  },
  shimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF40',
    width: '50%',
  },
});

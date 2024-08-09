import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { icons } from '../assets/icons'; // icons dosyasını doğru yoldan içe aktarın

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]); // İkon büyüklüğünü azalttım
    const top = interpolate(scale.value, [0, 1], [0, 4]); // Dikey kaydırma miktarını azalttım

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });
  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName] ? icons[routeName]({ color }) : null}
      </Animated.View>
      <Animated.Text style={[{ color, fontSize: 10 }, animatedTextStyle]}> {/* Yazı boyutunu küçülttüm */}
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2, // Dikey boşluğu azalttım
  },
});

export default TabBarButton;
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import TabBarButton from './TabBarButton';
import { useTabBarVisibility } from '../../loginApp/context/TabBarVisibilityContext';

const TabBar = ({ state, descriptors, navigation }) => {
  const { isVisible } = useTabBarVisibility();
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  if (isVisible === undefined) {
    return null; // Or show a loading indicator
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0, // Animate to opacity: 1 (visible) or 0 (invisible)
      duration: 500, // 500ms
      useNativeDriver: true, // Add this line
    }).start();
  }, [isVisible, fadeAnim]);

  const primaryColor = 'white';
  const greyColor = '#d0c8c8';
  const isHomeTabActive = state.index === 0;

  if (!isVisible && fadeAnim.__getValue() === 0) return null; // Prevent rendering when fully invisible

  return (
    <Animated.View style={[styles.tabbar, { opacity: fadeAnim }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
          />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  },
});

export default TabBar;

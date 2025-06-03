import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <>
      {/* Normal tab bar container */}
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          if (route.name === 'Connections' || route.name === 'Settings') return null; // Skip top-right buttons
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const icons = {
            Home: isFocused ? require('../assets/home-icon.png') : require('../assets/home-icon-unselected.png'),
            Friends: isFocused ? require('../assets/friends-icon.png') : require('../assets/friends-icon-unselected.png'),
          };

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabButton}>
              <Image source={icons[route.name]} style={styles.icon} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Top-right Connections button */}
      {state.routes.map((route, index) => {
        if (route.name !== 'Connections') return null;

        const isFocused = state.index === index;
        const icon = require('../assets/add-friends-icon.png'); // Replace if needed

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={[styles.topRightButton, { right: 20 }]}>
            <Image source={icon} style={styles.smallIcon} />
          </TouchableOpacity>
        );
      })}

      {/* Top-right Settings button */}
      {state.routes.map((route, index) => {
        if (route.name !== 'Settings') return null;

        const isFocused = state.index === index;
        const icon = require('../assets/settings-icon.png'); // Replace with your own image

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.topRightButton2}>
            <Image source={icon} style={styles.smallIcon} />
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 85,
    height: 85,
    elevation: 20,
  },
  topRightButton: {
    position: 'absolute',
    top: 40, // Adjust based on safe area
    right: 20,
    zIndex: 100,
    borderRadius: 40,
    elevation: 10,
  },
  topRightButton2: {
    position: 'absolute',
    top: 100, // Adjust based on safe area
    right: 20,
    zIndex: 90,
    borderRadius: 40,
    elevation: 10,
  },
  smallIcon: {
    width: 50,
    height: 50,
  },
});

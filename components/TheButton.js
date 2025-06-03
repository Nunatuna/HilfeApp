import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RoundButton = ({ onPress }) => {
  const buttonIcon = require('../assets/button-icon.png');
  const size = 380;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.04,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.touchArea}>
        <Image source={buttonIcon} style={styles.icon} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9752',
    elevation: 5,
    zIndex: 1,
  },
  touchArea: {
    width: '100%',
    height: '100%',
    borderRadius: 190,
    overflow: 'hidden', // ensures image stays round
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 190,
  },
});

export default RoundButton;

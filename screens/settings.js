import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TheButton from '../components/TheButton';
import Clouds from '../components/Clouds';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Clouds />
        <Image source={require('../assets/heart-icon.png')} style={styles.icon} />
        <Image source={require('../assets/leaf-icon.png')} style={styles.icon2} />
        <Text style={[styles.header, { fontFamily: 'PlayFairDisplay-SemiBold'}]}>Check In.</Text>
        <Text style={[styles.text, { fontFamily: 'Outfit-Light' }]}>Press on the sun and{'\n'}alert your friends</Text>
        <TheButton />
      </View>
      <Image source={require('../assets/orange-hills-bg.png')} style={styles.hillsBG} />
      <Image source={require('../assets/gradient-bg.png')} style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
    backgroundColor: '#FF9752',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 430,
    height: 932,
    zIndex: -1,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 48,
    color: 'white',
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
  },
  icon: {
    position: 'absolute',
    top: 4,
    left: 236,
    width: 16,
    height: 14,
    zIndex: 1,
  },
  icon2: {
    position: 'absolute',
    top: 44,
    left: 282,
    width: 14,
    height: 17,
    zIndex: 2,
  },
  hillsBG: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    width: 430,
    height: 200,
  }
});

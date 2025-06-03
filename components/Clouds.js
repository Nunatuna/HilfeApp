import React from "react";
import { View, Image, StyleSheet } from "react-native"; 

const Clouds = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cloud-icon2.png')} style={styles.cloud1} />
      <Image source={require('../assets/cloud-icon2.png')} style={styles.cloud2} />
      <Image source={require('../assets/cloud-icon.png')} style={styles.cloud3} />
      <Image source={require('../assets/cloud-icon.png')} style={styles.cloud4} />
      <Image source={require('../assets/cloud-icon.png')} style={styles.cloud5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Changed from absolute to relative
    alignItems: 'center',
    backgroundColor: '#FF9752',
  },
  cloud1: {
    position: 'absolute',
    top: 220,
    left: -228,
    zIndex: 100,
  },
  cloud2: {
    position: 'absolute',
    top: -12,
    left: -219,
    zIndex: 100,
  },
  cloud3: {
    position: 'absolute',
    top: -129,
    left: -36,
    zIndex: 100,
  },
  cloud4: {
    position: 'absolute',
    top: -27,
    left: 136,
    zIndex: 100,
  },
  cloud5: {
    position: 'absolute',
    top: 169,   // Adjust the top to prevent overlap
    left: 115,  // Adjust left value accordingly
    zIndex: 100,
  },
});

export default Clouds;

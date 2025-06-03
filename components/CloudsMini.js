import React from "react";
import { View, Image, StyleSheet } from "react-native"; 

const Clouds = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cloud-icon2.png')} style={styles.cloud2} />
      <Image source={require('../assets/cloud-icon.png')} style={styles.cloud3} />
      <Image source={require('../assets/cloud-icon.png')} style={styles.cloud4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Changed from absolute to relative
    alignItems: 'center',
    backgroundColor: '#FF9752',
    top: 150,
    flex: 1, // To ensure the container takes full space
  },
  cloud2: {
    position: 'absolute',
    top: 10,
    left: -198,
    zIndex: 0,
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
    left: 95,
    zIndex: 100,
  },
});

export default Clouds;

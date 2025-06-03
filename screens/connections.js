import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CloudsMini from '../components/CloudsMini';
import SearchFriends from '../components/SearchFriends';
import AddFriendCard from '../components/AddFriendCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <CloudsMini />
        <View>
            <Text style={[styles.header, { fontFamily: 'PlayFairDisplay-SemiBold'}]}>Add friend.</Text>
            <Image source={require('../assets/green-heart-icon.png')} style={styles.heart} />
            <Image source={require('../assets/green-leaf-icon.png')} style={styles.leaf} />
        </View>
        <SearchFriends />
        <View>
            <Text style={[styles.header2, { fontFamily: 'Display-Bold'}]}>Connect with your{'\n'}friends and<Text style={{ fontWeight: 'bold'}}> feel safer.</Text></Text>
            <Text style={[styles.flavorText, { fontFamily: 'Display-Bold'}]}>Please write a username in order to {'\n'}connect with you friends.</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.friendsSection}>
            <AddFriendCard name="Sofein" avatarColor="#F86A94" />
            <AddFriendCard name="Philly" avatarColor="#B86A94" />
            <AddFriendCard name="JagerMeister" avatarColor="#486B94" />
        </View>
        <Image source={require('../assets/green-hills-bg.svg')} style={styles.hillsBG} />
        <Image source={require('../assets/green-gradient-bg.svg')} style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: '#8BD072',
  },
  header: {
    fontSize: 36,
    color: "#ffffff",
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  header: {
    fontSize: 36,
    color: "#ffffff",
  },
  hillsBG: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    width: 430,
    height: 200,
  },
  heart: {
      position: 'absolute',
      top: 7,
      left: 132,
  }, 
  leaf: {
      position: 'absolute',
      top: 31,
      left: 175,
  },
  header2: {
      fontSize: 24,
      color: "#ffffff",
      textAlign: 'center',
      marginTop: 15,
  },
  flavorText: {
      fontSize: 16,
      color: "#ffffff",
      textAlign: 'center',
      marginTop: 15,
  },
  line: {
      width: '80%',
      height: 1,
      backgroundColor: '#ffffff',
      marginTop: 25,
      marginBottom: 25,
  },
  friendsSection: {
      width: '100%',
      alignItems: 'center',
      gap: 10,
  }
});

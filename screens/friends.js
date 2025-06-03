import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CloudsMini from '../components/CloudsMini';
import SearchFriends from '../components/SearchFriends';
import FriendCard from '../components/FriendCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <CloudsMini />
        <View>
            <Text style={[styles.header, { fontFamily: 'PlayFairDisplay-SemiBold'}]}>Connections.</Text>
            <Image source={require('../assets/pink-heart-icon.png')} style={styles.heart} />
            <Image source={require('../assets/pink-leaf-icon.png')} style={styles.leaf} />
        </View>
        <SearchFriends />
        <Image source={require('../assets/pink-gradient-bg.png')} style={styles.background} />
        <Image source={require('../assets/pink-hills-bg.svg')} style={styles.hillsBG} />
        <View style={styles.friendsSection}>
            <FriendCard name="BaddieRonnie" avatarColor="#F86A94" />
            <FriendCard name="WillyWonk" avatarColor="#A623D2" />
            <FriendCard name="DollarDillan" avatarColor="#23D23D" />
            <FriendCard name="Magnussy87" avatarColor="#9ECFFF" />
            <FriendCard name="Nunatuna-1" avatarColor="#ED1C14" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: '#E74782',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 430,
    height: 932,
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
      top: 10,
      left: 136,
  }, 
  leaf: {
      position: 'absolute',
      top: 30,
      left: 205,
  },
  friendsSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
});

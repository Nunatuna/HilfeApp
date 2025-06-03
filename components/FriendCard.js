import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FriendCard = ({ name = 'Unknown Friend', avatarColor = '#FF9EC3' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.userContainer}>
          <View style={[styles.avatar, { backgroundColor: avatarColor }]} />
          <Text style={[styles.name, { fontFamily: 'Outfit-Light' }]}>{name}</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 430,
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    padding: 15,
    borderRadius: 20,
    width: '75%',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    padding: 20,
    borderRadius: 9999,
  },
  name: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FriendCard;

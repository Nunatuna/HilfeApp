import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddFriendCard = ({ name = 'Unknown Friend', avatarColor = '#FF9EC3' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.userContainer}>
          <View style={[styles.avatar, { backgroundColor: avatarColor }]} />
          <Text style={[styles.name, { fontFamily: 'Outfit-Light' }]}>{name}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.addButton}>
                <Image source={require('../assets/add-heart-icon.png')}></Image>
            </View>
            <FontAwesome name="trash" size={24} color="white" />
        </View>
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
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: '#8BD072',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default AddFriendCard;

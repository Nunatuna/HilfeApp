import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#D3E0FF" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Find your friends"
        placeholderTextColor="#D3E0FF"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        width: '80%', // 👈 Change this to any % or number
        alignSelf: 'center', // 👈 centers it if width is not 100%
      },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    borderWidth: 0,
    outlineStyle: 'none',
  },
});

export default SearchInput;

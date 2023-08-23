import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products"
          placeholderTextColor="gray"
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'blue', // Text color in blue
  },
});

export default Header;

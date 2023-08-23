// SecondScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the second screen</Text>
      <Button
        title="Go back to First Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SecondScreen;

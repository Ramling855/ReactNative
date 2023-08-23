// FirstScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
// import Home from "./Home"
const FirstScreen = ({ navigation }) => {
  return (
    <View>
      {/* <Home/> */}
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default FirstScreen;

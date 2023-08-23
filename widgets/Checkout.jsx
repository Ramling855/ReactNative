import React from 'react';
import { Button, Text, View } from 'react-native';

const Checkout = ({ navigation }) => {
  return (  <View>
    <Button
       title='Return TO Home'
     onPress={() => navigation.navigate('Home')}
    ></Button>
    </View>
  );
};

export default Checkout;
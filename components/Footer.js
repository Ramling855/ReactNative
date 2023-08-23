import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Footer = ({navigation}) => {
  const dummyNames = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerLink}>
        <Image
                  source={{ uri: "https://www.freepnglogos.com/uploads/logo-home-png/home-transparent-home-images-10.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText}
          
          >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        // onPress={() => navigation.navigate('Category')}
        >
        <Image
                  source={{ uri: "https://www.kindpng.com/picc/m/492-4927144_classified-search-categories-icon-png-transparent-png.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText}
          
          >Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        // onPress={() => navigation.navigate('Feeds')}
        >
        <Image
                  source={{ uri: "https://e7.pngegg.com/pngimages/592/414/png-clipart-computer-icons-news-news-icon-angle-text.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText} 
          
          >Feeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        // onPress={() => navigation.navigate('Shops')}
        >
        <Image
                  source={{ uri: "https://i.pinimg.com/originals/12/05/fc/1205fcd62dc8911ef0137a76ffb23d74.png" }}
                  style={styles.footerItemImage}
                />
        <Text style={styles.footerText}
          >Shops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        // onPress={() => navigation.navigate('Checkout')}
        >
        <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/102/102655.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText}
          >Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  footer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  footerText: {
    color: 'blue',
    backgroundColor: 'white',
  },
  footerItemImage: {
    width: 25,
    height: 25,
    borderRadius: 4,
  },
});

export default Footer;

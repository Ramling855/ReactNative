import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Animated,
  StyleSheet,
  Button
} from 'react-native';
import ProductListNew from '../components/ProductList';
import Header from '../components/Header';
import HomeScreen from '../locationPages/HomeScreen';
import { SearchBar } from 'react-native-screens';
const screenHeight = Dimensions.get('window').height;

const dummyProducts = [
  {
    id: 1,
    name: 'cucumber',
    price: 19.99,
    rating: 4.5,
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 2,
    name: 'grapes',
    price: 29.99,
    rating: 3.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapB9IjlLT-JkZMxCI1-fmV1iP-4YF4SxeJiRgJ0nwBRchGLz7FycKa2xSk4algMtn7VU&usqp=CAU',
  },
  {
    id: 3,
    name: 'carrot',
    price: 39.99,
    rating: 4.2,
    image: 'https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202203151011.jpg?im=Resize=(360,360)',
  },
  {
    id: 4,
    name: 'Papaya',
    price: 19.99,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaO8ncSRvpi3kOOMfxSVPzDCuWFQFuJ7xiLA&usqp=CAU',
  },{
    id: 5,
    name: 'Strawberry',
    price: 19.99,
    rating: 4.5,
    image: 'https://fruitsandveggies.org/wp-content/uploads/2020/05/CA-Strawberries-Story-image-1-352x210.jpg',
  },{
    id: 6,
    name: 'Watermelan',
    price: 19.99,
    rating: 4.5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/OP/YX/EI/50823524/684657f0-f0ad-4176-8d9c-80c158293c42-500x500.jpg',
  },
  {
    id: 7,
    name: 'Mango',
    price: 19.99,
    rating: 4.5,
    image: 'https://qph.cf2.quoracdn.net/main-qimg-309ef3fb41fe851f44dabfa4dddd68c3.webp',
  }
  // ... (add more dummy products here)
];

const ProductList = ({navigation}) => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleSearch = (searchText) => {
    // Filter the products based on searchText
    const filtered = dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  const [scrollY] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProductPress = (product, index) => {
    setCurrentIndex(index);
  };

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, screenHeight / 2],
    outputRange: [0, -screenHeight / 2],
    extrapolate: 'clamp',
  });

  const circleInterpolate = scrollY.interpolate({
    inputRange: [0, dummyProducts.length * screenHeight],
    outputRange: [0, dummyProducts.length - 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}
      >
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products"
        />
        
        <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}>
        <Image 
                  source={{ uri: "https://i.pinimg.com/736x/02/e3/5a/02e35a23c80dd0554fe167d5b5a801ad.jpg" }}
                  style={styles.footerItemImage}
                />
        </TouchableOpacity>
       
      </Animated.View>
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <ScrollView horizontal style={styles.carousel}>
          {dummyProducts.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => handleProductPress(product, index)}
            >
              <View style={styles.carouselItem}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.carouselItemImage}
                />
                <Text style={styles.carouselItemName}>{product.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {dummyProducts.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => handleProductPress(product, index)}
            >
              <View style={styles.singleProduct}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.singleProductImage}
                />
                <Text style={styles.singleProductName}>{product.name}</Text>
                <Text style={styles.singleProductPrice}>
                  ₹{product.price.toFixed(2)}
                </Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.singleProductRating}>
                    Rating: {product.rating}
                  </Text>
                  {currentIndex === index && (
                    <View style={styles.circle} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
      <View  >
      <ProductListNew products={ dummyProducts} /></View>
      </ScrollView>
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
        
        onPress={() => navigation.navigate('Category')}
        >
        <Image
                  source={{ uri: "https://www.kindpng.com/picc/m/492-4927144_classified-search-categories-icon-png-transparent-png.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText}
          
          >Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        onPress={() => navigation.navigate('Feeds')}
        >
        <Image
                  source={{ uri: "https://e7.pngegg.com/pngimages/592/414/png-clipart-computer-icons-news-news-icon-angle-text.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText} 
          
          >Feeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        onPress={() => navigation.navigate('Shops')}
        >
        <Image
                  source={{ uri: "https://i.pinimg.com/originals/12/05/fc/1205fcd62dc8911ef0137a76ffb23d74.png" }}
                  style={styles.footerItemImage}
                />
        <Text style={styles.footerText}
          >Shops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}
        
        onPress={() => navigation.navigate('Checkout')}
        >
        <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/102/102655.png" }}
                  style={styles.footerItemImage}
                />
          <Text style={styles.footerText}
          >Checkout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.indicatorContainer}>
        {dummyProducts.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.indicator,
              {
                opacity: circleInterpolate.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.4, 1, 0.4],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: 'blue',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'whitesmoke',
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'black',
    marginRight:10,
    marginVertical:5,
    // width:"auto"
  },
  location: {
    color: 'white',
    marginLeft: 10,
  },
  carousel: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    backgroundColor: 'blue',
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  carouselItemImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  footerItemImage: {
    width: 25,
    height: 25,
    borderRadius: 4,
  },
  carouselItemName: {
    marginTop: 5,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  singleProduct: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingVertical: 2,
    // borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  singleProductImage: {
    width: 250,
    height: 150,
    borderRadius: 8,
  },
  singleProductName: {
    marginTop: 10,
    fontSize: 16,
  },
  singleProductPrice: {
    fontSize: 16,
    color: 'green',
  },
  singleProductRating: {
    fontSize: 14,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'blue',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  footerLink: {
    alignItems: 'center',
  },
  footerText: {
    color: 'blue',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginHorizontal: 4,
  },
});

export default ProductList;

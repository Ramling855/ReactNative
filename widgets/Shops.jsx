import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleSearch = (searchText) => {
    // Filter the products based on searchText
    const filtered = dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const dummyProducts = [
    {
      name: 'Pizza',
      image: 'https://imgmedia.lbb.in/media/2019/07/5d242ad8e93a896e5542da0d_1562651352251.jpg',
    },{
        name: 'HealthyFood',
        image:"https://sandinmysuitcase.com/wp-content/uploads/2021/01/Popular-Indian-Food-Dishes.jpg.webp"
    },
    {
        name: 'ItalianFood',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/210211143233-28-classic-italian-dishes.jpg?q=w_2472,h_1391,x_0,y_0,c_fill/w_1280',
      },{
          name: 'Novelty',
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eyqlqIGUe2fjn5gwivo5V-He89hR_69BmQ&usqp=CAU"
      },
      {
        name: 'Traditional Food',
        image: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg',
      },{
          name: 'Spicy Food',
          image:"https://www.winescholarguild.org/media/k2/items/cache/1d78dab465011a17861883fe75b60c35_XL.webp"
      }
    // ... Add more dummy products
  ];

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} />
      <ScrollView style={styles.middleContainer}>
        <ProductList products={filteredProducts || dummyProducts} />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  middleContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;

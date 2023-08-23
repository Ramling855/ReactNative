import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const ProductList = ({ products }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.productList}>
        {products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productText}>{product.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  productList: {
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Rounded image
    marginRight: 10,
  },
  productText: {
    fontSize: 16,
    color:"blue"
  },
});

export default ProductList;

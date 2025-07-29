// screens/HomeScreen.js

import React from 'react';
import { View, FlatList, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

// Dummy data for products
const PRODUCTS = [
    { id: '1', name: 'iPhone 16 Pro Max', price: 1199 },
    { id: '2', name: 'Lenovo Laptop', price: 749 },
    { id: '3', name: 'Mac Book Pro 15', price: 1799 },
    { id: '4', name: 'Samsung Phone', price: 1299 },
];

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} đã được thêm vào giỏ!`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        )}
      />
      {/* XÓA NÚT NÀY ĐI */}
      {/* <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    product: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    name: { fontSize: 18 },
    price: { fontSize: 16, color: 'green', marginVertical: 5 },
});

export default HomeScreen;
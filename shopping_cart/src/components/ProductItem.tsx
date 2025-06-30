import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Product } from '../data';

interface ProductItemProps {
  item: Product;
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.cartButton}>
           <Icon name="cart" size={20} color="#222" />
        </TouchableOpacity>
        <Image source={{ uri: item.imageURL }} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Giữ nguyên phần styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    position: 'relative',
  },
  cartButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductItem;
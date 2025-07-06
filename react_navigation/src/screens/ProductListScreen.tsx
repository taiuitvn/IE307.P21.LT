import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import ProductItem from '../components/ProductItem';
import { products, Product } from '../data.ts';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ProductListScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem item={item} onPress={() => handleProductPress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedProduct?.imageURL }}
              style={styles.fullScreenImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
      width: '100%',
      height: '100%',
  },
  fullScreenImage: {
    width: screenWidth,
    height: screenHeight,
  },
});

export default ProductListScreen;
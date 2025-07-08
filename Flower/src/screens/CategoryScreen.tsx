
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { categoryData, flowerData, Category } from '../data'; 
import { images } from '../components/imageManager'; 

const CategoryScreen = ({ navigation }: any) => {

  const handlePress = (item: Category) => {
    navigation.navigate('FlowerList', {
      categoryId: item.maloai,
      categoryName: item.tenloai,
    });
  };

  const renderItem = ({ item }: { item: Category }) => {
    const representativeFlower = flowerData.find(flower => flower.maloai === item.maloai);

    return (
      <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemContainer}>
   
        <Text style={styles.itemText}>{item.tenloai}</Text>
      
        {representativeFlower && (
          <Image
            source={images[representativeFlower.hinh]} 
            style={styles.image}
          />
        )}
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Danh mục loại hoa</Text>
      <FlatList
        data={categoryData} 
        keyExtractor={(item) => item.maloai}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, color: 'red' },
  itemContainer: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  itemText: { fontSize: 18, marginBottom: 10 },
  image: { width: 150, height: 150, borderRadius: 8 },
});

export default CategoryScreen;
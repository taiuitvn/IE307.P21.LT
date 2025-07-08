// FlowerListScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { flowerData } from '../data';
import { images } from '../components/imageManager';

const FlowerListScreen = ({ route, navigation }: any) => {
  const { categoryId } = route.params;
  const flowersToShow = flowerData.filter(hoa => hoa.maloai === categoryId);
  const handlePressFlower = (item: any) => {
    navigation.navigate('FlowerDetail', { flowerId: item.mahoa });
  };

  return (
    <FlatList
      data={flowersToShow}
      keyExtractor={(item) => item.mahoa}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePressFlower(item)}>
          <View style={styles.flowerItem}>
            <Text style={styles.flowerName}>{item.tenhoa}</Text>
            <Image
              source={images[item.hinh]}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flowerItem: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  flowerName: { fontSize: 18, fontWeight: 'bold' },
  image: { width: 150, height: 150, marginVertical: 10 },
});

export default FlowerListScreen;
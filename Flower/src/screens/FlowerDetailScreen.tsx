// FlowerDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { flowerData, categoryData } from '../data';
import { images } from '../components/imageManager';

const FlowerDetailScreen = ({ route, navigation }: any) => {
  const { flowerId } = route.params;

  const flower = flowerData.find(f => f.mahoa === flowerId);
  const category = flower ? categoryData.find(c => c.maloai === flower.maloai) : undefined;

  if (!flower) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Không tìm thấy thông tin hoa.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={images[flower.hinh]} style={styles.image} />

        <Text style={styles.text}>Tên loại hoa: {category?.tenloai}</Text>
        <Text style={styles.text}>Mã hoa: {flower.mahoa}</Text>
        <Text style={styles.text}>Tên hoa: {flower.tenhoa}</Text>
        <Text style={styles.text}>Đơn giá: {flower.giaban}</Text>
        <Text style={styles.text}>Mô tả: {flower.mota}</Text>

        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={styles.link}>Về trang các loại hoa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Trở lại</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default FlowerDetailScreen;
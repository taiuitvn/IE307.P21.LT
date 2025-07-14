// src/screens/AddNewScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBook } from '../services/api'; 
import { Book } from '../component/types';

const AddNewScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    coverImage: '',
    description: '',
  });

  const handleChange = (field: keyof typeof book, value: string) => {
    setBook(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!book.title || !book.author || !book.price) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin vào các trường bắt buộc.');
      return;
    }

    setLoading(true);
    try {
      const newBookData = {
        ...book,
        price: Number(book.price),
      };
      await createBook(newBookData);
      Alert.alert('Thành công', 'Đã thêm sách mới thành công!');
      navigation.goBack();
    } catch (error) {
      console.error('Failed to create book:', error);
      Alert.alert('Lỗi', 'Không thể thêm sách mới.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tên sách (bắt buộc)"
        value={book.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tác giả (bắt buộc)"
        value={book.author}
        onChangeText={(text) => handleChange('author', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Giá (bắt buộc)"
        value={book.price}
        onChangeText={(text) => handleChange('price', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="URL ảnh bìa"
        value={book.coverImage}
        onChangeText={(text) => handleChange('coverImage', text)}
      />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Mô tả"
        value={book.description}
        onChangeText={(text) => handleChange('description', text)}
        multiline
      />
      <Button title={loading ? "Đang lưu..." : "Lưu"} onPress={handleSave} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  description: {
      height: 100,
      textAlignVertical: 'top'
  }
});

export default AddNewScreen;
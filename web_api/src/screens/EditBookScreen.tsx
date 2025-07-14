// src/screens/EditBookScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getBookById, updateBook } from '../services/api';
import { Book } from '../component/types';

const EditBookScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { bookId } = route.params as { bookId: string };

  const [book, setBook] = useState<Partial<Book>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(bookId);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateBook(bookId, book);
      Alert.alert("Success", "Book updated successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Failed to update book:", error);
      Alert.alert("Error", "Failed to update the book.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof Book, value: string | number) => {
    setBook(prev => ({ ...prev, [field]: value }));
  };

  if (loading && !Object.keys(book).length) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={book.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={book.author}
        onChangeText={(text) => handleChange('author', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={String(book.price || '')}
        onChangeText={(text) => handleChange('price', Number(text))}
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        placeholder="Cover Image URL"
        value={book.coverImage}
        onChangeText={(text) => handleChange('coverImage', text)}
      />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        value={book.description}
        onChangeText={(text) => handleChange('description', text)}
        multiline
      />
      <Button title={loading ? "Saving..." : "Save"} onPress={handleSave} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loader: { flex: 1, justifyContent: 'center' },
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

export default EditBookScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getBooks, deleteBook } from '../services/api'; 
import { Book } from '../component/types';


type NavigationProp = {
  navigate: (screen: string, params?: any) => void;
};

const BookListScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp>();
  const isFocused = useIsFocused();

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      Alert.alert("Lỗi", "Không thể tải danh sách sách.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchBooks();
    }
  }, [isFocused]);

  const handleDelete = (bookId: string) => {
    Alert.alert(
      "Xác nhận Xóa",
      "Bạn có chắc chắn muốn xóa cuốn sách này không?",
      [
        {
          text: "Đồng Ý",
          onPress: async () => {
            try {
              await deleteBook(bookId);
              setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
              Alert.alert("Thành công", "Đã xóa sách.");
            } catch (error) {
              console.error("Failed to delete book:", error);
              Alert.alert("Lỗi", "Không thể xóa sách.");
            }
          },
          style: "destructive",
        },
        {
          text: "Hủy",
          style: "cancel",
        },
      ],
      { cancelable: true } 
    );
  };

  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.coverImage || 'https://via.placeholder.com/80x100' }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
        <Text numberOfLines={3}>{item.description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteButton}>🗑️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditBook', { bookId: item.id })}>
          <Text style={styles.editButton}>✏️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      {loading && books.length === 0 ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          onRefresh={fetchBooks} 
          refreshing={loading}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddNew')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },
    listContainer: { padding: 10, paddingBottom: 80 }, 
    loader: { flex: 1, justifyContent: 'center' },
    card: { flexDirection: 'row', backgroundColor: 'white', padding: 15, marginVertical: 8, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
    image: { width: 80, height: 120, borderRadius: 5, backgroundColor: '#eee' },
    infoContainer: { flex: 1, marginLeft: 15, justifyContent: 'center' },
    title: { fontSize: 18, fontWeight: 'bold' },
    author: { fontSize: 14, color: 'gray' },
    price: { fontSize: 16, fontWeight: 'bold', color: 'green', marginVertical: 4 },
    actions: { justifyContent: 'space-around', alignItems: 'center' },
    editButton: { fontSize: 24, color: 'blue' },
    deleteButton: { fontSize: 24, color: 'red' },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#007AFF',
        borderRadius: 30,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    fabIcon: {
        fontSize: 30,
        color: 'white',
    },
});

export default BookListScreen;
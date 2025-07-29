import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/cartSlice';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const itemPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = 15;
  const shippingFee = 10;
  const orderTotal = itemPrice + taxes + shippingFee;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <View style={styles.quantityControl}>
                <Button title="-" onPress={() => dispatch(updateQuantity({ id: item.id, change: -1 }))} />
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Button title="+" onPress={() => dispatch(updateQuantity({ id: item.id, change: 1 }))} />
                <Button title="Delete" color="red" onPress={() => dispatch(removeFromCart({ id: item.id }))} />
            </View>
          </View>
        )}
      />
      <View style={styles.summary}>
        <Text>Item Price: ${itemPrice.toFixed(2)}</Text>
        <Text>Taxes: ${taxes.toFixed(2)}</Text>
        <Text>Shipping Fee: ${shippingFee.toFixed(2)}</Text>
        <Text style={styles.total}>Order Total: ${orderTotal.toFixed(2)}</Text>
        <Button title="Continue" onPress={() => navigation.navigate('Checkout')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
    quantityControl: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    quantity: { marginHorizontal: 10, fontSize: 16 },
    summary: { padding: 20, borderTopWidth: 1, borderColor: '#ccc' },
    total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});

export default CartScreen;
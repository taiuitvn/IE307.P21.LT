import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux';

const CheckoutScreen = () => {
  const { user } = useSelector((state) => state.auth);

  // Use local state for form fields, pre-filled from Redux
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [phone, setPhone] = useState(user?.phoneNumber || '');
  const [address, setAddress] = useState(user?.detailedAddress || '');

  const handleConfirm = () => {
    Alert.alert('Order Confirmed!', 'Thank you for your purchase.');
    // Here you would typically navigate back to home or to an order success screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput value={fullName} onChangeText={setFullName} style={styles.input} />
      
      <Text style={styles.label}>Phone Number</Text>
      <TextInput value={phone} onChangeText={setPhone} style={styles.input} />
      
      <Text style={styles.label}>Detailed Address</Text>
      <TextInput value={address} onChangeText={setAddress} style={styles.input} />
      
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 16, marginBottom: 5 },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default CheckoutScreen;
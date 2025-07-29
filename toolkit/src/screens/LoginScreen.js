import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userInfo = {
      fullName: 'Jane Doe',
      phoneNumber: '555-123-4567',
      detailedAddress: '456 Tech Avenue, Silicon Valley, CA',
    };
    dispatch(loginSuccess(userInfo));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/your-logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Smart E-Commerce</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => {}} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  logo: { width: 150, height: 150, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
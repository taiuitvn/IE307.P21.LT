import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import các màn hình của bạn
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/ProductScreen'; // Đổi tên file hoặc import từ file đúng

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Màn hình Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Đăng nhập' }}
        />

        {/* Màn hình Home/Product sau khi đăng nhập */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chủ', headerBackVisible: false }} // Ẩn nút back
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
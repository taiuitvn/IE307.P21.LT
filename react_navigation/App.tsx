import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// Import các thành phần điều hướng và Gesture Handler
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
     <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
      </SafeAreaProvider>
  );
};

export default App;
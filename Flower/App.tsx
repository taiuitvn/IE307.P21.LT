// App.tsx
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlowerDetailScreen from './src/screens/FlowerDetailScreen'; 
import CategoryScreen from './src/screens/CategoryScreen'; 
import FlowerListScreen from './src/screens/FlowerListScreen';

type RootStackParamList = {
  Category: undefined;
  FlowerList: { categoryId: string; categoryName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Category"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen
          name="FlowerDetail"
          component={FlowerDetailScreen}
          options={{ title: 'CTHoa' }} 
      />
        <Stack.Screen 
            name="Category" 
            component={CategoryScreen}
            options={{ title: 'Danh Mục Hoa' }} 
        />
        <Stack.Screen 
            name="FlowerList" 
            component={FlowerListScreen} 
            options={({ route }) => ({ title: route.params.categoryName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
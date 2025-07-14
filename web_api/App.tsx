// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import BookListScreen from './src/screens/BookListScreen';
import EditBookScreen from './src/screens/EditBookScreen';
import AddNewScreen from './src/screens/AddNewScreen'; 


export type RootStackParamList = {
  BookList: undefined;
  EditBook: { bookId: string };
  AddNew: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen
          name="BookList"
          component={BookListScreen}
          options={{ title: 'Danh sách Sách' }}
        />
        <Stack.Screen
          name="EditBook"
          component={EditBookScreen}
          options={{ title: 'Chỉnh sửa Sách' }}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNewScreen}
          options={{ title: 'Thêm Sách Mới' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
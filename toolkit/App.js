// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store.js';
import AppNavigator from './src/navigation/AppNavigator.js'; // Your app's navigation

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
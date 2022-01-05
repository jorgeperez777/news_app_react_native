/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persist from './config/redux_config/config/store';
import Home from './src/screens/home/Home';

const persistorStore = persist();
const App = () => {
  return (
    <Provider store={persistorStore.store}>
      <PersistGate loading={null} persistor={persistorStore.persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

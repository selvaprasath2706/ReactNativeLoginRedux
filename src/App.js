/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import NavigationPage from './NavigationPage';
import { Provider } from 'react-redux';
import store from './store/Store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  return (
    <Provider store={store}>
      <NavigationPage />
    </Provider>
  );
};



export default App;

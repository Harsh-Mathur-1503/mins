/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text className="text-black flex-1 bg-color-white">App</Text>
      </View>
    </Provider>
  );
}

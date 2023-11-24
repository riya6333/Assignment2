import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import {ReduxDemo} from './screen/reduxDemo/ReduxDemo';
export default function ReduxApp() {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
}

const styles = StyleSheet.create({});

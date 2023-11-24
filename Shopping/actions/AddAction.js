import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ADD_TO_Cart} from './ActionType';

export default function addToCart(item) {
  return {
    type: ADD_TO_Cart,
    data: item,
  };
}

const styles = StyleSheet.create({});

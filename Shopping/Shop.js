import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Product from './Product';
export default function Shop() {
  const products = [
    {
      name: 'Nokia',
      colour: 'red',
      price: 4444,
      image:
        'https://www.shutterstock.com/image-vector/realistic-notch-modern-smartphone-slim-260nw-2154306811.jpg',
    },

    {
      name: 'Samsung',
      colour: 'red',
      price: 42444,
      image:
        'https://www.shutterstock.com/image-vector/realistic-notch-modern-smartphone-slim-260nw-2154306811.jpg',
    },
    {
      name: 'iphone',
      colour: 'red',
      price: 44424,
      image:
        'https://media.gettyimages.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=gi&k=20&c=j7GCAcJt1-BbdsXPuvRGS80NSwryWmLA2rTiax33s_c=',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

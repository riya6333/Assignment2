import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function Product(props) {
  const item = props.item;

  const handleAddToCart = () => {};
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 10, borderWidth: 2}}>
      <Text style={{fontSize: 15}}>{item.name}</Text>
      <Text style={{fontSize: 15}}>{item.colour}</Text>
      <Text style={{fontSize: 15}}>{item.price}</Text>
      <Image style={{width: 170, height: 170}} source={{uri: item.image}} />
      <Button title="Add to cart" onPress="handleAddToCart" />
    </View>
  );
}

const styles = StyleSheet.create({});

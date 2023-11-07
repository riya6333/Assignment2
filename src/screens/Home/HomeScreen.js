import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

// import RegistrationScreen from './registration';

export function HomeScreen({route}) {
  const navigation = useNavigation();
  const {name, checked, email, password, technology} = route.params;
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{color: 'teal', fontSize: 18}}>Candidate Name:{name}</Text>
      <Text style={{color: 'teal', fontSize: 18}}>Email:{email}</Text>
      <Text style={{color: 'teal', fontSize: 18}}>Password:{password}</Text>
      <Text style={{color: 'teal', fontSize: 18}}>Gender:{checked}</Text>
      <Text style={{color: 'teal', fontSize: 18}}>
        Technology Choosen:{technology}
      </Text>
    </View>
  );
}

//

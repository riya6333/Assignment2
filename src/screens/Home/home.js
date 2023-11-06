import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from './registration';

export function HomeScreen({route}) {
  const {name, checked, email, password, gender, technology} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Candidate Name:{name}</Text>
      <Text>Email:{email}</Text>
      <Text>Password:{password}</Text>
      <Text>Gender:{gender}</Text>
      <Text>Technology Choosen:{technology}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function loginPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            title: 'Registration',
            headerStyle: {backgroundColor: 'teal'},
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Registration Details',
            headerStyle: {backgroundColor: 'teal'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default loginPage;

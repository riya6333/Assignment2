import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import RegistrationScreen from './src/screens/Home/RegistrationScreen';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
// export default function Assignment3() {
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Assignment3() {
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
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: 'teal'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default loginPage;
// </View>
//   )
// }

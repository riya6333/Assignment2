// App.js
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';
import LoginScreen from './screen/LoginScreen'; // Import your components
import SignUpScreen from './screen/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const store = createStore(reducer);
const Stack = createNativeStackNavigator();

const AppLogin = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppLogin;

// App.js
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';
import LoginScreen from './screen/LoginScreen'; // Import your components
import SignUpScreen from './screen/SignUpScreen';
import HomeScreen from './screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './store/store';

const store = createStore(reducer);
const Stack = createNativeStackNavigator();

const AppLogin = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default AppLogin;

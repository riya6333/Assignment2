import React from 'react';
import {Provider} from 'react-redux';
import authReducer from './reducer/authReducer';
import Login from './screen/login/Login'; // Import your components
import Register from './screen/register/Register';
import Home from './screen/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/configureStore';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Register">
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

// ----------------------------------

// import 'react-native-gesture-handler';
// import React, {useEffect, useState, useImperativeHandle} from 'react';
// import {View, Text, Button, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Register} from './screen/register/Register';
// import {Login} from './screen/login/Login';
// import {Home} from './screen/home/Home';
// import {store, persistor} from './store/configureStore';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import SplashScreen from 'react-native-splash-screen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [initialRouteName, setRoute] = useState();
//   useEffect(() => SplashScreen.hide());

//   useEffect(() => {
//     // console.log(store, 'storeeee');
//     let authUser = store.getState().authReducer;
//     if (Object.keys(authUser?.current_user).length > 0) {
//       setRoute('Home');
//     } else {
//       setRoute('Login');
//     }
//   }, []);

//   return initialRouteName != null ? (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName={initialRouteName}>
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Register" component={Register} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   ) : (
//     <></>
//   );
// };

// export default App;

// function CustomDrawerContent(props) {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props} style={{}}>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'gray',
//             marginVertical: 5,
//             paddingVertical: 5,
//           }}
//   onPress={() => props.navigation.navigate('Parent')}>
//   <Text>Parent Screen</Text>
// </TouchableOpacity>
// <TouchableOpacity
//   style={{
//     backgroundColor: 'gray',
//     marginVertical: 5,
//     paddingVertical: 5,
//   }}
//           onPress={() => props.navigation.navigate('Register')}>
//           <Text>Register Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'gray',
//             marginVertical: 5,
//             paddingVertical: 5,
//           }}
//           onPress={() => props.navigation.navigate('ReduxDemo')}>
//           <Text>Redux Demo</Text>
//         </TouchableOpacity>
//       </DrawerContentScrollView>
//     </View>
//   );
// }

/**
 * In React, the forwardRef function is used to pass
 *  a ref from a parent component down to one of its child components,
 *  even when that child component is a functional component.
 *  This is especially useful in cases where you want to access the
 *  DOM elements or internal methods of a child component from its parent.
 *  forwardRef allows you to maintain a reference to the child component
 *  and interact with it directly.
 */

/**
 * useImperativeHandle is a hook in React that allows
 *  a functional component to customize the instance value that
 *  is exposed when a parent component calls ref on a child component.
 *  This hook is useful when you need to provide a more controlled or
 *  limited interface to the parent component when using ref with functional components.

Here's how useImperativeHandle works:

You can use it inside a child functional component to define a custom interface f
or the component instance that will be accessible through the ref passed by the
parent component.

The hook takes two arguments:

A ref object (usually created using useRef) that represents the component's instance.
A function that returns an object of methods and properties to expose to the parent component.
 */

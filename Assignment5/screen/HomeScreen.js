import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../actions/ActionPerform';
import LoginScreen from './LoginScreen';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData);

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(Login());

    // Navigate back to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 60}}>Welcome</Text>
      <Text style={{fontSize: 30}}>Email: {user ? user.email : ''}</Text>
      <Text style={{fontSize: 30}}>Password: {user ? user.password : ''}</Text>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      <TouchableOpacity onPress={handleLogout} style={styles.LoginButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
  },
});

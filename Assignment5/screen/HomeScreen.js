import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../actions/ActionPerform';
import {login} from '../actions/ActionPerform';

const HomeScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  //   const {user: passedUser} = route.params || {};

  //   useEffect(() => {
  //     if (passedUser) {
  //       dispatch(login(passedUser));
  //     }
  //   }, [dispatch, passedUser]);

  const handleLogout = () => {
    // Dispatch logout action
    // dispatch(login());
    dispatch(logout());

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
            fontSize: 20,
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
    borderRadius: 15,
    width: '25%',
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
});

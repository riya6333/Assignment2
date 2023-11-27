import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../actions/ActionPerform';
import Login from '../../src/Login';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const signUpSuccess = useSelector(state => state.signUpSuccess);

  // console.log('all user', user);

  const handleSignUp = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newUser = {name, email, password, phone};
    console.log('new user', newUser);
    dispatch(signUp(newUser));

    Alert.alert('Registration Successful', 'You can now log in!');
    // Navigate back to the login screen
    navigation.navigate(Login);
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
      />

      <TouchableOpacity onPress={handleSignUp} style={styles.SignInButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  SignInButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: '35%',
    paddingVertical: 5,
    marginVertical: 10,
  },
});

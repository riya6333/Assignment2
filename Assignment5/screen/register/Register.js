import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUserData} from '../../actions/userAction';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log('sign up', user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUserData({name, email, mobile, password}, navigation));
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
        value={mobile}
        onChangeText={text => setMobile(text)}
      />

      <TouchableOpacity onPress={handleRegister} style={styles.SignInButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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

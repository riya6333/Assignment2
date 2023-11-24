import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {userLogin} from '../actions/ActionPerform';
import {userSignUp} from '../actions/ActionPerform';

export default function SignUpScreen({navigation}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const signUpSuccess = useSelector(state => state.signUpSuccess);

  // const handleSignUp = () => {
  //   if (!name) {
  //     Alert.alert('Error', 'Please Enter your Name');
  //     return;
  //   }

  //   if (!email) {
  //     Alert.alert('Error', 'Please Enter your Email');
  //     return;
  //   }

  //   if (!phone) {
  //     Alert.alert('Error', 'Please Enter your Phone Number');
  //     return;
  //   }

  //   if (!password) {
  //     Alert.alert('Error', 'Please Enter your Password');
  //     return;
  //   }
  const handleSignUp = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    dispatch(userSignUp(userData));

    Alert.alert('Registration Successful', 'You can now log in!');
    // Navigate back to the login screen
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.subLoginContainer2}>
          <TextInput
            style={styles.name}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.phone}
            placeholder="Enter Phone No."
            value={phone}
            onChangeText={text => setPhone(text)}
          />

          <TextInput
            style={styles.mail}
            placeholder="Enter your mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.password}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={handleSignUp} style={styles.btn}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            SignUp
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  loginContainer: {
    flex: 0.5,
  },
  subLoginContainer2: {
    borderRadius: 30,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  phone: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  mail: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  password: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  footer: {
    flex: 0.2,
  },
  btn: {
    width: '100%',
    backgroundColor: '#4FA8D8',
    borderRadius: 20,
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

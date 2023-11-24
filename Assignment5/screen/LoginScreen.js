import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
// import { styles } from './styles'
// import {on} from 'events';
import {userLogin} from '../actions/ActionPerform';

const RememberMeCheckbox = ({value, onToggle}) => {
  const checkboxStyle = {
    width: 25,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[checkboxStyle, value && {backgroundColor: 'black'}]}>
        {value && <Text style={{color: 'white'}}>✔️</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const savedCredentials = useSelector(state => state.user);

  useEffect(() => {
    if (rememberMe && savedCredentials) {
      setEmail(savedCredentials.email);
      setPassword(savedCredentials.password);
    }
  }, [rememberMe, savedCredentials]);

  const handleLogin = () => {
    // Implement your authentication logic here
    const user = {email, password}; // Replace this with actual authentication

    // Dispatch login action
    dispatch(Login(userData));

    if (rememberMe) {
      // Save credentials in AsyncStorage or secure storage
      // AsyncStorage.setItem('savedCredentials', JSON.stringify(user));
    }
    navigation.navigate('Home');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.subLoginContainer2}>
          <TextInput
            style={styles.mail}
            placeholder="Enter your mail"
            value={email}
            onChangeText={text => setEmail(text)}></TextInput>

          <TextInput
            style={styles.password}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}></TextInput>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <RememberMeCheckbox value={rememberMe} onToggle={toggleRememberMe} />
        <Text>Remember Me</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogin} style={styles.LoginButton}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
        {/* <Button title="Login" onPress={handleLogin} /> */}
        {/* <Button title="Sign Up" onPress={navigateToSignUp} /> */}
        <TouchableOpacity
          onPress={navigateToSignUp}
          style={styles.RegisterButton}>
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
  },
  phone: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
  },

  mail: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
  },
  password: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
  },
  footer: {
    flex: 0.2,
  },

  btn: {
    width: '100%',
    backgroundColor: '#4FA8D8',
    borderRadius: 20,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
    marginVertical: 10,
  },
  RegisterButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
    marginVertical: 10,
  },
});

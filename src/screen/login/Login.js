import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../actions/userAction';

export const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const authUserData = useSelector(state => state.authReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (authUserData) {
      setRememberMe(authUserData?.is_remember);
      setEmail(authUserData?.remember_email);
      setPassword(authUserData?.remember_password);
    }
  }, [authUserData]);

  const handleSignUp = () => {
    console.log(navigation);
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    let all_users = authUserData?.all_users;
    let selectedUser = all_users.filter(
      user => user.email == email && user.password == password,
    );
    console.log(selectedUser, 'selectedUser....');

    if (selectedUser.length != 0) {
      dispatch(login(selectedUser[0], rememberMe, navigation));
    } else {
      Alert.alert('User does not exist');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#001965'}}>Login</Text>
          <Text style={{fontSize: 20, color: '#484848'}}>
            Login To Your Account
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={styles.inputEmail}
            value={email}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.inputEmail}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your Password"
          />
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => setRememberMe(!rememberMe)}>
            <Icon
              name={rememberMe ? 'checksquare' : 'checksquareo'}
              color="black"
              size={25}
            />
            <Text
              style={{
                fontSize: 12,
                color: '#556B2F',
                paddingTop: 5,
                paddingRight: 2,
              }}>
              {' '}
              Remember Me {rememberMe.toString()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.3,
          justifyContent: 'space-between',
          // backgroundColor: 'grey',
        }}>
        <View>
          <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text style={{fontSize: 14, color: '#001965'}}>
            If you don't have an account?
          </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{color: '#4FA8D8'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  title: {
    color: '#001965',
    fontSize: 40,
    fontWeight: 'bold',
  },

  loginContainer: {
    // gap:20,
    flex: 0.6,
    // backgroundColor: 'pink',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },

  // textinputContainer:{
  //     alignSelf:'center',
  //     width:350,
  //     alignItems:'center',
  // },

  inputEmail: {
    fontSize: 16,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    paddingLeft: 10,
  },

  inputPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 7,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    paddingRight: 10,
  },

  eyeLogo: {
    top: 15,
    // right: 20,
  },

  btn: {
    backgroundColor: '#001965',
    borderRadius: 20,
  },
});

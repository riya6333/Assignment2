import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import { styles } from './styles'
import {on} from 'events';

export default function Assignment1() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const clickLogin = () => {
    Alert.alert(`Email: ${email} \n Passord: ${password}`);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 30,
            textAlign: 'center',
            color: '#001965',
          }}>
          Registration
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.subLoginContainer2}>
          <TextInput
            style={styles.name}
            placeholder="Enter Your Name"></TextInput>
          <TextInput
            style={styles.phone}
            placeholder="Enter Phone No."></TextInput>

          <TextInput
            style={styles.mail}
            placeholder="Enter your mail"
            value={email}
            onChangeText={text => setEmail(text)}></TextInput>

          <TextInput
            style={styles.password}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"></TextInput>

          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              textAlign: 'right',
              color: 'black',
            }}>
            Forget Password?
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={clickLogin} style={styles.btn}>
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
  header: {
    flex: 0.3,
    justifyContent: 'center',
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
  signup: {},
});

// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import SplashScreen from 'react-native-splash-screen';

// const Assessment = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   const [users, setUsers] = useState([
//     {
//       id: '1',
//       name: 'John',
//       hobbies: [{hobby: 'Painting'}, {hobby: 'Cooking'}, {hobby: 'Gardening'}],
//     },
//     {
//       id: '2',
//       name: 'Alice',
//       hobbies: [{hobby: 'Painting'}, {hobby: 'Cooking'}, {hobby: 'Gardening'}],
//     },
//   ]);

//   const addEmptyUser = () => {
//     const newUser = {
//       id: (users.length + 1).toString(),
//       name: '',
//       hobbies: [],
//     };
//     setUsers([...users, newUser]);
//   };

//   const renderHobby = ({item}) => (
//     <View style={styles.hobbyContainer}>
//       <Text style={styles.hobbyText}>{item.hobby}</Text>
//     </View>
//   );

//   const renderUser = ({item}) => (
//     <View style={styles.userContainer}>
//       <Text style={styles.userName}>Name: {item.name}</Text>
//       <Text style={styles.sectionTitle}>Hobbies</Text>
//       <FlatList
//         data={item.hobbies}
//         keyExtractor={hobby => hobby.hobby}
//         renderItem={renderHobby}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Hobbies of Users</Text>
//       <FlatList
//         data={users}
//         keyExtractor={user => user.id}
//         renderItem={renderUser}
//       />
//       <TouchableOpacity style={styles.floatingButton} onPress={renderUser}>
//         <Icon name="add" size={30} color="#fff" />
//       </TouchableOpacity>
//     </View>
//   );
// };

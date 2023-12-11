import {View, Text, Dimensions} from 'react-native';
import React from 'react';
//   import LinearGradient from 'react-native-linear-gradient';
import Input from './Input';

const Signup = ({navigation}) => {
  return (
    <View>
      {/* <LinearGradient
          colors={['#42a1f5', '#03bafc', '#42c5f5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            height: Dimensions.get('window').height * 0.2,
            width: '100%',
            alignItems: 'center',
            paddingTop: 40,
          }}> */}
      <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
        S.G.Codes
      </Text>
      {/* </LinearGradient> */}
      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: '#03bafc',
            textAlign: 'center',
          }}>
          REGISTER
        </Text>
        <Input title="Username" placeholder="S.G.Codes" keyboard="default" />
        <Input
          title="Email"
          placeholder="codes.sg@gmail.com"
          keyboard="email-address"
        />
        <Input
          title="Contact Number"
          placeholder="8569******"
          keyboard="number-pad"
        />
        <Input
          title="Confirm Password"
          placeholder="********"
          keyboard="default"
          is_password={true}
        />
        <Input
          title="Password"
          placeholder="********"
          keyboard="default"
          is_password={true}
        />
        {/* <LinearGradient
            onPress={() => {}}
            colors={['#42a1f5', '#03bafc', '#42c5f5']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              borderRadius: 100,
              width: 150,
              alignSelf: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              marginTop: 50,
              marginBottom: 10,
            }}> */}
        <Text style={{color: 'white', fontSize: 19}}>SIGNUP</Text>
        {/* </LinearGradient> */}
        <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'center'}}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

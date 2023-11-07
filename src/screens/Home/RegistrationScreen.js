import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const technology = [
  {label: 'React Native', value: '1'},
  {label: 'Mern', value: '2'},
  {label: 'Frontend Developer', value: '3'},
  {label: 'Backend Developer', value: '4'},
];

const qualifications = [
  {label: 'Intermediate', value: '1'},
  {label: 'Under Graduation', value: '2'},
  {label: 'Post Graduation', value: '3'},
  {label: 'Other', value: '4'},
];

const technologyList = [
  'React Native',
  'Mern',
  'Frontend Developer',
  'Backend Developer',
];

function RegistrationScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState('');
  const [technology, setTechnology] = React.useState('');
  const [qualification, setQualification] = React.useState('');

  const handleRegister = () => {
    navigation.navigate('HomeScreen', {
      name,
      checked,
      qualification,
      technology,
      email,
      password,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F9F6EE',
      }}>
      <View
        style={{
          flex: 1,

          width: '100%',
          rowGap: 10,
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 18}}>Candidate Name:</Text>
        <View style={styles.setStyle}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Enter your name"
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.setStyle}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Enter your mail"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.setStyle}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.text}>Gender</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="male"
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.text}>Male</Text>

            <RadioButton
              value="female"
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text style={styles.text}>Female</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Qualification</Text>
          <Dropdown
            style={styles.Dropdown}
            data={qualifications}
            labelField="label"
            valueField="value"
            placeholder="Select"
            onChange={item => {
              setQualification(item.value);
            }}
          />
        </View>
        <Text style={styles.text}>Technology</Text>
        {technologyList.map((lang, index) => (
          <View key={index} style={styles.CheckboxContainer}>
            <CheckBox
              value={technology.includes(lang)}
              onValueChange={() => {
                if (technology.includes(lang)) {
                  setTechnology(technology.filter(item => item !== lang));
                } else {
                  setTechnology([...technology, lang]);
                }
              }}
            />
            <Text style={styles.text}>{lang}</Text>
          </View>
        ))}

        <Pressable style={styles.Button} onPress={handleRegister}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              padding: '3%',
              fontSize: 18,
              fontWeight: 500,
            }}>
            Register Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  setName: {
    backgroundColor: 'grey',
    width: '100%',
    borderRadius: 30,
  },
  setStyle: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  Dropdown: {
    width: '70%',
    borderWidth: 1,
  },
  CheckboxContainer: {
    flexDirection: 'row',
  },
  Button: {
    backgroundColor: 'teal',
    borderRadius: 50,
    width: '40%',
    alignSelf: 'center',
    // marginTop: '5%',
    // padding: '4%',
  },
});

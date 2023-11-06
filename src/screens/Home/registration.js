import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dropdown} from 'react-native-element-dropdown';
import {Checkbox, RadioButton} from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {HomeScreen} from './home';

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
      education,
      technology,
      email,
      password,
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          width: '100%',
          rowGap: 10,
          paddingTop: 20,
        }}>
        <Text>Candidate Name:</Text>
        <View style={styles.setStyle}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.setStyle}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="Enter your mail"
          />
        </View>
        <View style={styles.setStyle}>
          <TextInput style={{textAlign: 'center'}} placeholder="Password" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Gender</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="one"
              status={checked === 'one' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.text}>Male</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="two"
              status={checked === 'two' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('two')}
            />
            <Text style={styles.text}>Female</Text>
          </View>
        </View>
        <View>
          <Dropdown
            style={styles.Dropdown}
            data={qualifications}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Qualification"
            onChange={item => {
              setQualification(item.value);
            }}
          />
        </View>
        {/* 

        

     
       

       

        <Text style={styles.text}>Technology</Text>
        {technologyList.map((lang, index) => (
          <View key={index} style={styles.CheckboxContainer}>
            <Checkbox
              value={technology.includes(lang)}
              onValueChange={() => {
                if (technology.includes(lang)) {
                  // setTechnology(technology.filter(item => item !== lang));
                } else {
                  setTechnology([...technology, lang]);
                }
              }}
            />
            <Text style={styles.text}>{lang}</Text>
          </View>
        ))}

        <Button
          title="go to details"
          onPress={() =>
            navigation.navigate('Home', {name, email, password, gender})
          }
        />
    */}
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
    height: 50,
    width: '100%',
    margin: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
  },
});

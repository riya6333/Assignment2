import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserModal({
  isVisible,
  onClose,
  onAddUsers,
  closeModal,
}) {
  const [userData, setUserData] = useState({
    name: '',
    hobbies: [{hobbby: ''}],
  });

  const handleAddHobby = () => {
    setUserData(prevData => ({
      ...prevData,
      hobbies: [...prevData.hobbies, {hobbby: ''}],
    }));
  };

  const handleSaveUser = () => {
    const updatedHobbies = userData.hobbies || [];
    const userObject = {
      name: userData.name,
      hobbies: updatedHobbies.map(hobbby => ({hobby: hobbby.hobbby})),
    };
    onAddUsers(userObject);
    console.log('updated hobbies', updatedHobbies);
    console.log('userobject', userObject);
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.header}>Hobbies of Users</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputUserName}>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={userData.name}
              onChangeText={text =>
                setUserData(prevData =>
                  Object.assign({}, prevData, {name: text}),
                )
              }
            />
          </View>
          {userData.hobbies.map((hobbby, index) => (
            <View style={styles.hobbiesInputContainer} key={index}>
              <TextInput
                style={styles.input}
                placeholder="Enter hobbies"
                value={hobbby.hobbby}
                onChangeText={text => {
                  const updatedHobbies = [...userData.hobbies];
                  updatedHobbies[index].hobbby = text;
                  setUserData(prevData =>
                    Object.assign({}, prevData, {hobbies: updatedHobbies}),
                  );
                }}
              />
              {index === userData.hobbies.length - 1 && (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddHobby}>
                  <Icon name="plus" size={22} color="white" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveUser}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    height: 45,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '85%',
    fontSize: 20,
  },
  inputUserName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hobbiesInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#000080',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#000080', // Change color as needed
    borderRadius: 45,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    height: 45,
    width: 45,
    marginBottom: 10,
  },
});

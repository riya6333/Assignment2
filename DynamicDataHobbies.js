import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DynamicDataHobbies() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserHobbies, setNewUserHobbies] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addUser = () => {
    if (newUserName.trim() === '' || newUserHobbies.trim() === '') {
      alert('Please enter both name and hobbies');
      return;
    }

    const newUser = {
      name: newUserName,
      hobbies: newUserHobbies.split(',').map((hobby, index) => ({
        No: index + 1,
        hobby: hobby.trim(),
      })),
    };

    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserHobbies('');
  };

  const renderHobbies = ({item}) => (
    <View style={styles.hobbyContainer}>
      <Text style={styles.hobbyText}>
        {item.No}: {item.hobby}
      </Text>
    </View>
  );

  const renderUser = ({item}) => (
    <View style={styles.userContainer}>
      <Text style={styles.userName}>Name: {item.name}</Text>
      <Text style={styles.sectionTitle}>Hobbies</Text>
      <FlatList
        data={item.hobbies}
        keyExtractor={hobby => hobby.hobby}
        renderItem={renderHobbies}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hobbies of Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderUser}
      />
      <TouchableOpacity style={styles.openModalButton} onPress={toggleModal}>
        <Text style={styles.buttonText}>Add Users</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.header}>Todo List</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={newUserName}
                onChangeText={setNewUserName}
              />

              <View style={styles.hobbiesInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter hobbies (comma-separated)"
                  value={newUserHobbies}
                  onChangeText={setNewUserHobbies}
                />
                <TouchableOpacity style={styles.addButton} onPress={addUser}>
                  <Icon name="add" size={28} color="white" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.saveButton} onPress={addUser}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={toggleModal}>
                <Text style={styles.buttonText}>Close Todo List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
  },
  openModalButton: {
    backgroundColor: '#000080',
    borderRadius: 30,
    padding: 12,
    width: '25%',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    height: '97%',
    backgroundColor: '#b3c9f4',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  hobbiesInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#000080',
    borderRadius: 30,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 20,
    height: 45,
    width: 45,
    marginBottom: 6,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#000080',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  closeModalButton: {
    backgroundColor: '#000080',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    // marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  userName: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
    marginTop: 5,
  },
  hobbyContainer: {
    marginVertical: 5,
  },
  hobbyText: {
    color: '#808080',
    fontSize: 16,
  },
});

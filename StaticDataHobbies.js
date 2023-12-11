import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen';

const StaticDataHobbies = () => {
  const [user, setUser] = useState([
    {
      id: '1',
      name: 'Riya',
      hobbies: [
        {No: 1, hobby: 'Painting'},
        {No: 2, hobby: 'Cooking'},
        {No: 3, hobby: 'Gardening'},
      ],
    },
    {
      id: '2',
      name: 'Prachi',
      hobbies: [
        {No: 1, hobby: 'Painting'},
        {No: 2, hobby: 'Cooking'},
        {No: 3, hobby: 'Gardening'},
      ],
    },
    {
      id: '3',
      name: 'Sakshi',
      hobbies: [
        {No: 1, hobby: 'Painting'},
        {No: 2, hobby: 'Cooking'},
        {No: 3, hobby: 'Gardening'},
      ],
    },
  ]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  console.log('user:', user);

  const addUsers = () => {
    const newUser = {
      name: 'Riya',
      hobbies: [
        {No: 1, hobby: 'Painting'},
        {No: 2, hobby: 'Cooking'},
        {No: 3, hobby: 'Gardening'},
      ],
    };
    setUser([...user, newUser]);
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
        data={user}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderUser}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.floatingButton} onPress={addUsers}>
          <Text style={styles.buttonText}>Add More users</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b3c9f4',
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 20,
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

  floatingButton: {
    backgroundColor: '#000080',
    borderRadius: 30,
    padding: 15,
    width: '40%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default StaticDataHobbies;

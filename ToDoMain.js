import React, {useState} from 'react';
// import AntIcon from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
} from './ReduxToDo/actions/ActionToPerform';

const ToDoMain = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch(state => state.todos);
  const [task, setTask] = React.useState('');
  const [editIndex, setEditIndex] = React.useState(-1);
  console.log(tasks);
  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        dispatch(editTodo(editIndex, task));
        setEditIndex(-1);
      } else {
        dispatch(addTodo(task));
      }
      setTask('');
    } else {
      Alert.alert('Please Enter Any tasks');
    }
  };

  const handleCompleteTask = id => {
    dispatch(toggleTodo(id));
  };

  const handleEditTask = taskId => {
    const index = tasks.findIndex(task => task.id === taskId);
    console.log(index, 'index');
    if (index !== -1) {
      setTask(tasks[index].text);
      setEditIndex(taskId);
    }
  };

  const handleRemoveTask = id => {
    dispatch(deleteTodo(id));
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          item.completed && {textDecorationLine: 'line-through', color: 'gray'},
        ]}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => handleCompleteTask(item.id)}
          disabled={item.completed}>
          <Text
            style={[
              styles.completeButton,
              item.completed ? {color: 'gray'} : {color: 'green'},
            ]}>
            {item.completed ? (
              ''
            ) : (
              <Ionicons name="checkmark-done" size={25} color="white" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
          <AntIcon name="edit" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(index)}>
          <Text style={styles.removeButton}>Delete</Text>
          <AntIcon name="delete" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>ToDo List</Text>

      <Text style={styles.title}>Add your Task...</Text>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{padding: '5%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    color: 'maroon',
    padding: '8%',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 50,
    padding: '2%',
    fontWeight: 'bold',
    backgroundColor: 'maroon',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  box: {
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'maroon',
    padding: 10,

    borderRadius: 50,
    fontSize: 18,
    width: '71%',
  },
  addButton: {
    backgroundColor: 'maroon',
    padding: 15,
    borderRadius: 50,
    width: '28%',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    width: '40%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  completeButton: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: '2%',
  },
  editButton: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: '2%',
    color: 'maroon',
  },
  removeButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'maroon',
  },
});

export default ToDoMain;

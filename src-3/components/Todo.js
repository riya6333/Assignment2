import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, toggleTodo, editTodo} from '../actions/todoAction';
import {
  View,
  TextInput,
  Pressable,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = () => {
  const dispatch = useDispatch();
  const todoReducer = useSelector(state => state);
  const [task, setTask] = useState('');
  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    if (todoReducer.length > 0) {
      setNewTask(todoReducer);
    }
  }, [todoReducer]);

  const addTask = text => {
    dispatch(addTodo(text));
    if (task) {
      setNewTask([...newTask, {text: task, completed: false}]);
      setTask('');
    } else {
      Alert.alert('Please enter a task');
    }
  };

  const toggleTask = index => {
    dispatch(toggleTodo(index));
    const newTodo = [...newTask];
    newTodo[index].completed = !newTodo[index].completed;
    setNewTask(newTodo);
  };

  const removeTask = index => {
    dispatch(removeTodo(index));
    let newArray = [];
    for (let i in newTask) {
      if (i !== index) {
        newArray.push({...newTask[i]});
      }
    }
  };

  const renderTask = ({item, index}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
      }}>
      <Text>{item.text}</Text>

      <TouchableOpacity onPress={() => removeTask(index)}>
        <Icon name="remove" size={40} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => toggleTask(index)}
        disabled={item.completed}>
        <Text style={[item.done ? {color: 'yellow'} : {color: 'green'}]}>
          {item.done ? 'Completed' : 'Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        // backgroundColor: 'black'
      }}>
      <Text
        style={{
          fontSize: 34,
          fontWeight: 'bold',
          color: 'blue',
          textAlign: 'center',
        }}>
        ToDo List
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder="Enter a task..."
          value={task}
          onChangeText={text => setTask(text)}
          style={{
            flex: 0.8,
            borderColor: 'gray',
            borderWidth: 2,
            fontSize: 20,
          }}
        />
        <Pressable
          style={{
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',
            color: 'white',
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={addTask}>
          <Text style={{fontSize: 20}}>Add</Text>
        </Pressable>
      </View>

      <Text style={{color: 'black', fontSize: 22}}>List :</Text>

      <View style={{}}>
        <FlatList
          data={newTask}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </View>
    </View>
  );
};

export default Todo;

import { View, Text,StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'


export default function ToDoList() {
    const[task,setTask]=useState('');
    const[tasks,setTasks]=useState([]);
    
    const handleAddTask = () => {
      if(task){
        setTasks([...tasks, {text: task, isCompleted : false}]);
        setTask('');
      }
      else{
        Alert.alert('Please enter task')
      }
    }

    const handleCompletetask = index => {
      const updatedTasks =[...tasks];
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted ;
      setTasks(updatedTasks);
    }


    const renderItem = ({item, index}) => 
      <View style={styles.task}>
        <Text style={{ 
          textDecorationLine:item.isCompleted ? 'line-through' : 'none' ,color:"black"}}     >
       {item.text}
      </Text>

     
        <TouchableOpacity 
        onPress = { () => handleCompletetask(index)}
        disabled={item.isCompleted}>

          <Text style={[styles.completeButton,
          item.isCompleted ? {} : {color:"green"},
          ]}>
          {item.isCompleted ? '':'Complete'}

          </Text>
        </TouchableOpacity>

      </View>
     

  
   
  return (
    <View style={styles.mainContainer}>
        
        <ImageBackground 
        source={{ 
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKNQABaNXJQwKhD795tw7Zwbt3Nhlp4AY1Fz1CskjaWddW3w2w_cQ8V84l-QvvPQK8pQ&usqp=CAU', 
        }} 
        resizeMode="stretch" style={{flex:1}}>
        
                  <Text style={{
                      fontFamily: 'Poppins',
                      fontSize: 40,
                      textAlign: "center",
                      color:"#581845",
                      fontWeight:"bold",
                      padding:25
                      }}>
                      ToDo List
                  </Text>
      

       
              <Text style={{
                      fontFamily: 'Poppins',
                      fontSize: 22,
                      textAlign: "center",
                      color:"#181858",
                      fontWeight:"bold",
                      paddingBottom:25
                      }}>
                      Add your tasks here!!
              </Text>

        
              <View style={styles.middle}>
              <TextInput
                      style={styles.input}
                      value={task}
                      onChangeText={text => setTask(text)}
                      placeholder="enter your task....."/>

              <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
              </View>

          <FlatList
          data={tasks} 
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={{padding:30}}>
          </FlatList>
         
          

        

     
         </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({

mainContainer:{
   flex:1,
   
},

header:{
        padding:20,
        
},

middle:{
        justifyContent:"space-between",
        flexDirection:'row'
},

input:{
        textAlign:"center",
        borderWidth:3,
        borderRadius:20,
        fontSize:18,
        width:'75%'
},

addButton:{
        backgroundColor:"green",
        width:'20%',
        borderRadius:20,
        padding:20
},

addButtonText:{
  color:"white",
  fontWeight:"bold",
  fontSize:18
},

task:{
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:"center",
  marginBottom:15,
  fontSize:18
},

itemList:{
  width:'70%',
  fontSize:22,
  fontWeight:"bold",
  color:"black"
},

taskButtons:{
  flexDirection:"row"
},

completeButton:{
  fontWeight:"bold",
  fontSize:20
}


});
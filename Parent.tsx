import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Assignment2 from './Assignment2';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <NavigationContainer>
        <ToDoList />
    </NavigationContainer>
  );
}
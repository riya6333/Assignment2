import {ADD_TODO, REMOVE_TODO,TOGGLE_TODO,EDIT_TODO} from './todoActionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

export const removeTodo = index => {
  return {
    type: REMOVE_TODO,
    payload: index,
  };
};

export const editTodo = index => {
  return {
    type: EDIT_TODO,
    payload: index,
  };
}

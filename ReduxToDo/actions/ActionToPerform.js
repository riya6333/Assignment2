import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO} from './ActionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    payload: id,
    text,
  };
};

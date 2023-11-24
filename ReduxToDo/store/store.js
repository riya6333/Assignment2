// import {configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import ToDoReducer from '../reducers/ToDoApp';

const rootReducer = combineReducers({
  todos: ToDoReducer,
});

const store = createStore(ToDoReducer);

export default store;

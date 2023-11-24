import {combineReducers} from 'redux';
// import ToDoReducer from './ToDoReducer';
import {Provider} from 'react-redux';
import store from '../store/store';
import ToDoMain from '../../ToDoMain';
const ToDoApp = () => {
  return (
    <Provider store={store}>
      <ToDoMain />
    </Provider>
  );
};

export default ToDoApp;

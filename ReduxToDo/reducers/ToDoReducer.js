import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/ActionTypes';

const initialState = {
  todos: [],
};

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, id) =>
          index === action.payload
            ? {...todo, completed: !todo.completed}
            : todo,
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, id) => id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index == action.payload.id) {
            return {
              ...todo,
              text: action.payload.newText,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export default ToDoReducer;

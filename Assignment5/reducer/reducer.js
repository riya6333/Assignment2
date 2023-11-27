// reducers.js
import {
  TOGGLE_REM,
  USER_LOGIN,
  USER_SIGNUP,
  USER_LOGOUT,
} from '../actions/ActionTypes';

const initialState = {
  user: null,
  signUpSuccess: false,
  registeredUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGNUP:
      return {
        ...state,
        signUpSuccess: true,
        registeredUsers: [...state.registeredUsers, action.payload],
      };

    case TOGGLE_REM:
      return {
        ...state,
        rememberMe: !state.rememberMe,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;

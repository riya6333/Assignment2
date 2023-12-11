// reducers.js
// import {
//   TOGGLE_REM,
//   USER_LOGIN,
//   USER_SIGNUP,
//   USER_LOGOUT,
// } from '../actions/ActionTypes';

// const initialState = {
//   user: {},
//   signUpSuccess: false,
//   registeredUsers: [],
//   rememberMe: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOGIN:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case USER_SIGNUP:
//       return {
//         ...state,
//         signUpSuccess: true,
//         registeredUsers: [...state.registeredUsers, action.payload],
//       };
//     case USER_LOGOUT:
//       return {
//         ...state,
//         user: {},
//       };
//     case TOGGLE_REM:
//       return {
//         ...state,
//         rememberMe: !state.rememberMe,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

import {
  REGISTER_USER,
  SET_LOGIN_USER,
  SET_LOGOUT,
} from '../actions/actionTypes';

//initializing state
const initialState = {
  all_users: [],
  current_user: {},
  is_remember: false,
  remember_email: '',
  remember_password: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        all_users: action.payload,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        current_user: action.payload?.user,
        is_remember: action.payload?.is_remember,
        remember_email: action.payload?.is_remember
          ? action.payload?.user.email
          : '',
        remember_password: action.payload?.is_remember
          ? action.payload?.user.password
          : '',
      };

    case SET_LOGOUT:
      return {
        ...state,
        current_user: {},
      };

    default:
      return state;
  }
};
export default authReducer;

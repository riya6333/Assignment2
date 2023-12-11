// import {TOGGLE_REM, USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from './ActionTypes';
// export const login = user => {
//   return {
//     type: USER_LOGIN,
//     payload: user,
//   };
// };

// export const signUp = user => {
//   return {
//     type: USER_SIGNUP,
//     payload: user,
//   };
// };

// export const logout = () => ({
//   type: USER_LOGOUT,
// });
// export const toggleRememberMe = () => ({
//   type: TOGGLE_REM,
// });

import {REGISTER_USER, SET_LOGIN_USER, SET_LOGOUT} from './actionTypes';

export const registerUser = users => {
  return {
    type: REGISTER_USER,
    payload: users,
  };
};
export const loginUser = param => {
  return {
    type: SET_LOGIN_USER,
    payload: param,
  };
};
export const logout = () => {
  return {
    type: SET_LOGOUT,
  };
};

export function registerUserData(param, navigation) {
  return async (dispatch, getState) => {
    let all_users = getState().authReducer?.all_users;
    all_users.push(param);
    dispatch(registerUser(all_users));
    navigation.navigate('Login');
  };
}
export function onUserLogout(navigation) {
  return async (dispatch, getState) => {
    dispatch(logout());
    navigation.navigate('Login');
  };
}

export function login(param, is_remember, navigation) {
  return async (dispatch, getState) => {
    dispatch(
      loginUser({
        user: {...param},
        is_remember,
      }),
    );
    navigation.navigate('Home');
  };
}

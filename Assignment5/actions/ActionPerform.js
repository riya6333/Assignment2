import {TOGGLE_REM, USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from './ActionTypes';
export const login = user => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};

export const signUp = user => {
  return {
    type: USER_SIGNUP,
    payload: user,
  };
};

export const logout = () => ({
  type: USER_LOGOUT,
});
export const toggleRememberMe = () => ({
  type: TOGGLE_REM,
});

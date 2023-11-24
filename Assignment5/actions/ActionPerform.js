import {USER_LOGIN, USER_SIGNUP} from './ActionTypes';
export const userLogin = userData => {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
};

export const userSignUp = userData => {
  return {
    type: USER_SIGNUP,
    payload: userData,
  };
};

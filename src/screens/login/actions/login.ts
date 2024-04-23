import {AnyAction} from 'redux-saga';
import {fail, start, success} from '../../../utils/Utils';

export const LOGIN = 'LOGIN';
export const SET_VALID_USER = 'SET_VALID_USER';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export type LoginData = {
  email: string;
  password: string;
  fcmToken: string;
};

export const loginStart = (value: LoginData): AnyAction => ({
  type: start(LOGIN),
  payload: value,
});

export const loginSuccess = (): AnyAction => ({
  type: success(LOGIN),
});

export const loginFail = (): AnyAction => ({
  type: fail(LOGIN),
});

export const setValidUser = (value: boolean): AnyAction => ({
  type: SET_VALID_USER,
  payload: value,
});

export const setUserDetails = value => ({
  type: SET_USER_DETAILS,
  payload: value,
});

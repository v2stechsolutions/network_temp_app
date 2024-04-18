import {AnyAction} from '@reduxjs/toolkit';
import {fail, start, success} from '../../../utils/Utils';
import {LOGIN, SET_USER_DETAILS, SET_VALID_USER} from '../actions';

type LoginState = {
  isValidUser: boolean;
  loader: boolean;
  profile_picture: string | null;
  full_name: string | null;
  seller_email: string | null;
  mobile_number: string | null;
  id: number | null;
  seller_reg_no: string | null;
};

const initialState: LoginState = {
  isValidUser: false,
  loader: false,
  profile_picture: null,
  full_name: null,
  seller_email: null,
  mobile_number: null,
  id: null,
  seller_reg_no: null,
};

const loginReducer = (state = initialState, action: AnyAction): LoginState => {
  switch (action.type) {
    case start(LOGIN):
      return {
        ...state,
        loader: true,
      };
    case success(LOGIN):
      return {
        ...state,
        loader: false,
        isValidUser: true,
      };
    case fail(LOGIN):
      return {
        ...state,
        loader: false,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        profile_picture: action?.payload?.profile_picture ?? null,
        full_name: action?.payload?.full_name ?? null,
        seller_email: action?.payload?.seller_email ?? null,
        mobile_number: action?.payload?.mobile_number ?? null,
        id: action?.payload?.id ?? null,
        seller_reg_no: action?.payload?.seller_reg_no ?? null,
      };

    case SET_VALID_USER:
      return {
        ...state,
        isValidUser: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;

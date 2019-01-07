import { actionTypes as at } from './constants';
import { User } from './model';

export const fetch = () => {
  return {
    type: at.USERS_SAMPLE_FETCH
  };
};

export const fetchSuccess = (result: Array<User>) => {
  return {
    type: at.USERS_SAMPLE_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchError = (error: Error) => {
  return {
    type: at.USERS_SAMPLE_FETCH_ERROR,
    payload: error
  };
};

export const fetchResent = () => {
  return {
    type: at.RESENT_FETCH
  };
};

export const fetchResentSuccess = (result: Array<User>) => {
  return {
    type: at.RESENT_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchResentError = (error: Error) => {
  return {
    type: at.RESENT_FETCH_ERROR,
    payload: error
  };
};

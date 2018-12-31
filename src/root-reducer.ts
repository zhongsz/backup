import { combineReducers } from 'redux-immutable';

import homeReducer from './containers/Home/reducer';

export interface State {
  usersDomain: any
};

export const state = combineReducers({
  homeDomain: homeReducer
});

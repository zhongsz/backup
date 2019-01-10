import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';
import { UserAction } from './model';

const initialState = fromJS({
  users: [],
  isLoading: false,
  isFetched: false,
  recents:{Articles:[],Archives:[]},
  article:{Article:{}}
});

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case at.USERS_SAMPLE_FETCH:
      return state
        .set('isLoading', true)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    case at.USERS_SAMPLE_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isFetched', true)
        .set('users', fromJS(action.payload));
    case at.USERS_SAMPLE_FETCH_ERROR:
      return state
        .set('isLoading', false)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    case at.RESENT_FETCH:
        return state
          .set('isLoading', true)
          .set('isFetched', false)
          .set('recents', state.get('recents'));
    case at.RESENT_FETCH_SUCCESS:
          return state
            .set('isLoading', false)
            .set('isFetched', true)
            .set('recents', fromJS(action.payload));
    case at.RESENT_FETCH_ERROR:
          return state
            .set('isLoading', false)
            .set('isFetched', false)
            .set('recents', initialState.get('recents'));
    case at.ARTICLE_FETCH_CONTENT:
    return state
          .set("isLoading",false)
          .set("article",initialState.get('article'));
    case at.ARTICLE_FETCH_CONTENT_SUCCESS:
          return state
            .set('isLoading', false)
            .set('isFetched', true)
            .set('article', fromJS(action.payload));
    case at.ARTICLE_FETCH_CONTENT_ERROR:
          return state
            .set('isLoading', false)
            .set('isFetched', false)
            .set('article', initialState.get('article'));     
    default:
      return state;
  }
};

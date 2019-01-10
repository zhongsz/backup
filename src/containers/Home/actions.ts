import { actionTypes as at } from './constants';
import { User, ArticleResponse } from './model';

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

export const fetchResentSuccess = (result: any) => {
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

export const fetchContent = (id:string) => {
  console.log({id});
  return {
    type: at.ARTICLE_FETCH_CONTENT,
    id:id
  };
};

export const fetchContentSuccess = (result: ArticleResponse) => {
  return {
    type: at.ARTICLE_FETCH_CONTENT_SUCCESS,
    payload: result
  };
};

export const fetchContentError = (error: Error) => {

  return {
    type: at.ARTICLE_FETCH_CONTENT_ERROR,
    payload: error
  };
};

export const fetchRecentArticlesSuccess = (result: any) => {
  return {
    type: at.RESENT_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchRecentArticlesError = (error: Error) => {
  return {
    type: at.RESENT_FETCH_ERROR,
    payload: error
  };
};

export const fetchRecentArticles = (id?:string) => {
  console.log({id});
  return {
    type: at.RESENT_FETCH,
    id:id
  };
};

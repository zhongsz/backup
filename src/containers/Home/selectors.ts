import { createSelector } from 'reselect';

const getHomeDomain = () => (state: any) => state.get('homeDomain');

const selectUsers = () => createSelector(
  getHomeDomain(),
  usersState => usersState.get('users').toJS()
);

const selectIsLoading = () => createSelector(
  getHomeDomain(),
  usersState => usersState.get('isLoading')
);

const selectIsFetched = () => createSelector(
  getHomeDomain(),
  usersState => usersState.get('isFetched')
);

const selectRecents=()=>createSelector(
  getHomeDomain(),
  usersState => usersState.get('recents').toJS()
);

const selectArticle=()=>createSelector(
  getHomeDomain(),
  usersState => usersState.get('article').toJS()
);

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched,
  selectRecents,
  selectArticle
};

export default getHomeDomain;

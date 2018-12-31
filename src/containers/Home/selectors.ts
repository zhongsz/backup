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

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched
};

export default getHomeDomain;

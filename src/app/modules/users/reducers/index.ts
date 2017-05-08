import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromUsers from './users/users.reducer';
import * as fromFollowers from './followers/followers.reducer';

export interface State {
    users: fromUsers.State;
    followers: fromFollowers.State;
}

export const reducer = combineReducers({
   users: fromUsers.reducer,
   followers: fromFollowers.reducer
});

export const getUsersState = (state: State) => state.users;
export const getUsersEntities = createSelector(getUsersState, fromUsers.getEntities);

export const getFollowersState = (state: State) => state.followers;
export const getFollowersByLogin = (login: string) => createSelector(getFollowersState, state => fromFollowers.getByLogin(state, login));

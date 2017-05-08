import { Actions, LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../../actions/followers/followers.actions';
import { User } from '../../models/user.model';

export interface State {
    byLogin: {
        [login: string]: {
            loaded: boolean;
            loading: boolean;
            failed: boolean;
            entities: User[];
        }
    };
}

const initialState: State = {
    byLogin: {}
};

export function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case LOAD: {
            return {
                byLogin: Object.assign({}, state.byLogin, {
                    [action.payload.login]: {
                        loaded: false,
                        loading: true,
                        failed: false,
                        entities: null
                    }
                })
            };
        }

        case LOAD_SUCCESS: {
            return {
                byLogin: Object.assign({}, state.byLogin, {
                    [action.payload.login]: {
                        loaded: true,
                        loading: false,
                        failed: false,
                        entities: action.payload.followers
                    }
                })
            };
        }

        case LOAD_FAIL: {
            return {
                byLogin: Object.assign({}, state.byLogin, {
                    [action.payload.login]: {
                        loaded: true,
                        loading: false,
                        failed: true,
                        entities: null
                    }
                })
            };
        }

        default: {
            return state;
        }
    }
}

export const getByLogin = (state: State, login: string) => state.byLogin[login].entities;

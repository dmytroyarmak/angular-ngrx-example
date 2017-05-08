import { Actions, LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../../actions/users/users.actions';
import { User } from '../../models/user.model';

export interface State {
    loaded: boolean;
    loading: boolean;
    failed: boolean;
    entities: User[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    failed: false,
    entities: []
}

export function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case LOAD: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                failed: false,
                entities: action.payload.users
            };
        }

        case LOAD_FAIL: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                failed: true
            });
        }

        default: {
            return state;
        }
    }
}

export const getEntities = (state: State) => state.entities;

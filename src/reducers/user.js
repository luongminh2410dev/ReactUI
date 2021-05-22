import {
    SET_USER_INFO,
} from '../actions/types';

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, { type, user }) => {
    switch (type) {
        case SET_USER_INFO:
            return {
                ...state,
                ...user
            };
        default:
            return state;
    }
} 
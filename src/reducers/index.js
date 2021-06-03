import { combineReducers } from 'redux';
import cart from './cart';
import course from './course';
import user from './user';
export default combineReducers({
    user,
    cart,
    course,
})
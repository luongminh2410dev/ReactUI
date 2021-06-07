import { combineReducers } from 'redux';
import cart from './cart';
import course from './course';
import lesson from './lesson';
import user from './user';
export default combineReducers({
    user,
    cart,
    course,
    lesson,
})
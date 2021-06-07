import AsyncStorage from '@react-native-community/async-storage';
import { ADD_COURSE, INIT_CART, REMOVE_COURSE } from '../actions/types'
const handleSave = async (cart) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart))
    }
    catch {
        console.log('ERROR')
    }
}
const INITIAL_STATE = {
    cart: [],
}
export default (state = INITIAL_STATE, { type, course }) => {
    switch (type) {
        case INIT_CART:
            return { ...state, cart: course }
        case ADD_COURSE:
            state.cart.push(course)
            alert('Thêm khóa học thành công')
            handleSave(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case REMOVE_COURSE:
            const newCart2 = state.cart.filter((item) => {
                if (item.id === course.id) {
                    return false;
                }
                return true;
            })
            handleSave(newCart2)
            return {
                ...state,
                cart: newCart2
            }
        default:
            return state;
    }
}
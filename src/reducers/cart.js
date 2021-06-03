import { ADD_COURSE, REMOVE_COURSE } from '../actions/types'
const INITIAL_STATE = {
    cart: [],
}

export default (state = INITIAL_STATE, { type, course }) => {
    switch (type) {
        case ADD_COURSE:
            const check = state.cart.find((item) => {
                if (item.id === course.id) {
                    alert('Khóa học đã có trong giỏ hàng')
                    return true;
                }
                return false;
            })
            if (!check) {
                state.cart.push(course)
                alert('Thêm khóa học thành công')
                return {
                    ...state,
                    cart: state.cart
                }
            }
            return state;
        case REMOVE_COURSE:
            const newCart2 = state.cart.filter((item) => {
                if (item.id === course.id) {
                    return false;
                }
                return true;
            })
            return {
                ...state,
                cart: newCart2
            }
        default:
            return state;
    }
}
import { ADD_COURSE, REMOVE_COURSE, INIT_CART } from './types';

export const initCart = course => ({
    type: INIT_CART,
    course
})
export const addCourse = course => ({
    type: ADD_COURSE,
    course
})
export const removeCourse = course => ({
    type: REMOVE_COURSE,
    course
})

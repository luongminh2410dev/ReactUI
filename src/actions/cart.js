import { ADD_COURSE, REMOVE_COURSE } from './types';

export const addCourse = course => ({
    type: ADD_COURSE,
    course
})
export const removeCourse = course => ({
    type: REMOVE_COURSE,
    course
})

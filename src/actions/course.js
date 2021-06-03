import { TOGGLE_COURSE } from './types';

export const toggleCourse = course => ({
    type: TOGGLE_COURSE,
    course
})
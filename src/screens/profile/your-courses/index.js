import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
const YourCourses = ({ handleNavigateYourCourse }) => {
    return (
        <TouchableOpacity
            onPress={handleNavigateYourCourse}
            style={styles.main_btn}>
            <Text style={styles.main_btn_txt}>Your Courses</Text>
        </TouchableOpacity>
    )
}
export default YourCourses

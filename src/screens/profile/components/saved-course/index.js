import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
const SavedCourses = () => {
    return (
        <TouchableOpacity style={styles.main_btn}>
            <Text style={styles.main_btn_txt}>Saved</Text>
        </TouchableOpacity>
    )
}

export default SavedCourses

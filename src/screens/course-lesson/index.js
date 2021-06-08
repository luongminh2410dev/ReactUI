import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import HeaderBack from '../../components/header-back'
import LessonTabNavigator from './lesson-tab-navigator'
import styles from './styles'
const CourseLesson = ({ route }) => {
    const { course, lessons } = route.params
    return (
        <View style={styles.container}>
            <HeaderBack title={course.name} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll_styles}>
                <Text style={styles.lesson_name}>{lessons[1].name}</Text>
                <Text style={styles.current_lesson}>3 of 11 lessons</Text>
                <LessonTabNavigator lessons={lessons} />
            </ScrollView>
        </View>
    )
}

export default CourseLesson

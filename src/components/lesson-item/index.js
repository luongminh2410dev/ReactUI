import React, { useMemo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
const LessonItem = ({ item, course }) => {
    console.log('Render Lesson')
    const navigation = useNavigation();
    // Set progress 
    const progress = item.progress * 100;
    const progressStyle = useMemo(() => {
        return [styles.progress, { width: `${progress}%` }]
    }, [progress])
    // Navigate screen CourseLesson 
    const handleNavigator = () => {
        navigation.navigate('Course Lesson', { course: course, lesson: item })
    }
    return (
        <TouchableOpacity
            key={item.id}
            onPress={handleNavigator}
            style={styles.container}>
            <Image
                source={{ uri: item.img }}
                style={styles.img}
                resizeMode='contain'
            />
            <View style={styles.info}>
                <Text style={styles.lesson_name}>{item.name}</Text>
                <View style={styles.progress_bar}>
                    <View style={progressStyle}></View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LessonItem

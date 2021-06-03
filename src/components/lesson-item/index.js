import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
const LessonItem = ({ item }) => {
    console.log('Render Lesson')
    const progress = item.progress * 100;
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{ uri: item.img }}
                style={styles.img}
                resizeMode='contain'
            />
            <View style={styles.info}>
                <Text style={styles.lesson_name}>{item.name}</Text>
                <View style={styles.progress_bar}>
                    <View style={[styles.progress, { width: `${progress}%` }]}></View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LessonItem

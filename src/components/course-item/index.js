import React, { memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const CourseItem = memo((props) => {
    console.log('Render Item')
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.item.id % 2 == 0 ? '#E6EDF4' : '#F8F2EE' }]}>
            <View style={styles.header}>
                <Image
                    style={styles.course_img}
                    source={{ uri: props.item.img }}
                />
                <Text style={styles.course_price}>${props.item.price}</Text>
            </View>
            <View style={styles.course_info}>
                <Text style={styles.course_time}>{props.item.time}</Text>
                <Text style={styles.course_name}>{props.item.name}</Text>
                <Text style={styles.course_description}>{props.item.description}</Text>
            </View>
        </TouchableOpacity>
    )
})

export default CourseItem

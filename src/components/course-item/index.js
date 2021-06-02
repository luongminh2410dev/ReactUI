import React, { memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
const CourseItem = memo((props) => {
    const handleSelect = () => {
        props.handleSelected(props.item)
    }
    const item = props.item
    console.log('Render Item')
    return (
        <TouchableOpacity
            onPress={handleSelect}
            style={[styles.container, { backgroundColor: item.id % 2 == 0 ? '#E6EDF4' : '#F8F2EE' }]}>
            <View style={styles.header}>
                <Image
                    style={styles.course_img}
                    source={{ uri: item.img }}
                />
                <Text style={styles.course_price}>${item.price}</Text>
            </View>
            <View style={styles.course_info}>
                <Text style={styles.course_time}>{item.time}</Text>
                <Text style={styles.course_name}>{item.name}</Text>
                <Text style={styles.course_description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
})

export default CourseItem

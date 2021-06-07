import React, { memo, useMemo } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
const CourseItem = memo((props) => {
    const navigation = useNavigation();

    const { item, removeCourse, type } = props
    const handleSelected = () => {
        navigation.navigate('Product Detail', { item })
    }
    const setBackgroundColor = useMemo(() => {
        return {
            backgroundColor: item.id % 2 == 0 ? '#E6EDF4' : '#F8F2EE'
        }
    }, []);
    const handleRemoveCourse = () => {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc muốn xoá khoá học này không?',
            [
                {
                    text: 'Huỷ',
                    style: 'cancel',
                },
                {
                    text: 'Xoá',
                    onPress: () => {
                        removeCourse(item)
                    },
                },
            ],
            { cancelable: false }
        );
    }
    console.log('Render Item')

    return (
        <TouchableOpacity
            onPress={handleSelected}
            style={[styles.container, setBackgroundColor]}>
            <View style={styles.header}>
                {
                    type === 'in-cart' &&
                    <TouchableOpacity
                        onPress={handleRemoveCourse}
                        style={styles.remove_btn}>
                        <Feather name="x-octagon" size={20} color="#200E32" />
                    </TouchableOpacity>
                }
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

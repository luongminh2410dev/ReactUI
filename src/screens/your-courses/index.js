import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import CourseItem from '../../components/course-item';
import { removeCourse } from '../../actions/cart';

const keyExtractor = (item, index) => index.toString()
const YourCourses = ({ navigation, cart, removeCourse }) => {
    const handleNavigate = () => {
        navigation.goBack();
    }
    const renderItem = useCallback(({ item }) => (
        <CourseItem
            item={item}
            type={'in-cart'}
            removeCourse={removeCourse}
        />
    ), [cart])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={handleNavigate}
                    style={styles.header_btn_back}>
                    <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
                </TouchableOpacity>
                <Text style={styles.header_title}>Your Courses</Text>
            </View>
            <FlatList
                style={styles.list_course}
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    };
};
export default connect(mapStateToProps, { removeCourse })(YourCourses)

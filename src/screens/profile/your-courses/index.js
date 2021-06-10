import React, { useCallback } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux';
import CourseItem from '../../../components/course-item';
import { removeCourse } from '../../../actions/cart';
import HeaderBack from '../../../components/header-back';

const keyExtractor = (item, index) => item.id.toString()
const YourCourses = ({ cart, removeCourse }) => {
    const renderItem = useCallback(({ item }) => (
        <CourseItem
            item={item}
            type={'in-cart'}
            removeCourse={removeCourse}
        />
    ), [cart])

    return (
        <View style={styles.container}>
            <HeaderBack title={'Your Courses'} />
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

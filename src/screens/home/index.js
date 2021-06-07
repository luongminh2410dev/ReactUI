import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, FlatList } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'
import CourseItem from '../../components/course-item'
import { connect } from 'react-redux'
import SearchInput from './components/search-input'
const dismissKeyboard = () => Keyboard.dismiss();
const keyExtractor = (item) => `course_${item.id}`;
const Home = ({ navigation, course }) => {
    const [text, setText] = useState('');
    const handleSearch = () => {
        navigation.navigate('Results', { text });
    }
    const renderItem = useCallback(({ item }) => (
        <CourseItem
            item={item}
        />
    ), [course])
    console.log('Render Home')
    return (
        <KeyboardAvoidingView
            style={styles.body}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback
                onPress={dismissKeyboard}
                accessible={false}
            >
                <View style={styles.container} >
                    <View style={styles.header}>
                        <View style={styles.header_title}>
                            <Text style={styles.header_title_1}>Hello,</Text>
                            <Text style={styles.header_title_2}>Juana Antonieta</Text>
                        </View>
                        <TouchableOpacity style={styles.header_notification}>
                            <Fontisto name="bell" size={20} color="#200E32" />
                        </TouchableOpacity>
                    </View>
                    <SearchInput
                        text={text}
                        setText={setText}
                        handleSearch={handleSearch}
                    />
                    <View style={styles.category}>
                        <Text style={styles.category_title}>Category:</Text>
                        <View style={styles.category_item}>
                            <Text style={styles.category_item_txt}>#CSS</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Text style={styles.category_item_txt}>#UX</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Text style={styles.category_item_txt}>#Swift</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Text style={styles.category_item_txt}>#UI</Text>
                        </View>
                    </View>
                    <FlatList
                        style={styles.list_course}
                        data={course}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const mapStateToProps = (state) => {
    return {
        course: state.course
    };
};
export default connect(mapStateToProps)(Home)

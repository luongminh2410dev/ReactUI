import React, { useCallback, useState } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import CourseItem from '../../components/course-item'
import { connect } from 'react-redux'
const dismissKeyboard = () => Keyboard.dismiss();
const keyExtractor = (item, index) => index.toString()
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
                    <View style={styles.search}>
                        <TextInput
                            style={styles.search_input}
                            placeholder={'Search course'}
                            placeholderTextColor={'#78746D'}
                            onChangeText={setText}
                            value={text}
                        />
                        <TouchableOpacity
                            onPress={handleSearch}
                            style={styles.search_btn}>
                            <AntDesign name="search1" size={20} color="#200E32" />
                        </TouchableOpacity>
                    </View>
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

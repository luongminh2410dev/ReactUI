import React, { useCallback, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import styles from './styles'
import HeaderBack from '../../components/header-back'
import { connect } from 'react-redux'
import { updateLesson } from '../../actions/lesson'
import { useNavigation } from '@react-navigation/core'
import Question from '../../components/question'
import data from './data'
const keyExtractor = (item) => `question_${item.id}`;
const TestQuestion = ({ route, updateLesson }) => {
    const navigation = useNavigation()
    const lesson = route.params.lesson
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const refQuestions = useRef();
    const questionPage = useRef([]);

    // CHANGE QUESTION
    const handleChangeQuestion = () => {
        if (currentQuestion < data.length) {
            refQuestions.current.scrollToIndex({ index: currentQuestion })
            setCurrentQuestion(currentQuestion + 1)
        }
        else if (currentQuestion == data.length) {
            // SHOW RESULT TESTS & UPDATE STORE
            handleFinishTest()
        }
    }
    //  FINISH ALL QUESTION
    const handleFinishTest = () => {
        let correct = 0
        for (var i in data) {
            if (data[i].correctAnswer == questionPage.current[i].getCurrentAnswer()) {
                correct += 1
            }
        }
        const progress = correct / data.length;
        const newLesson = { ...lesson, progress: progress }
        //  UPDATE THIS LESSON WITH NEW PROGRESS
        updateLesson(newLesson)
        Alert.alert(
            'Kết quả',
            `Đúng ${correct} / ${data.length}`,
            [
                {
                    text: 'Xác nhận',
                    onPress: () => {
                        navigation.goBack()
                    },
                },
            ],
            { cancelable: false }
        );
    }
    // PREVIOUS QUESTION
    const handleBackQuestion = () => {
        if (currentQuestion > 1) {
            refQuestions.current.scrollToIndex({ index: currentQuestion - 2 })
            setCurrentQuestion(currentQuestion - 1)
        }
        else {
            navigation.goBack()
        }
    }
    const renderItem = useCallback(({ item, index }) => (
        <Question
            ref={ref => questionPage.current[index] = ref}
            item={item}
            index={index}
        />
    ), [data])

    return (
        <View style={styles.container}>
            <HeaderBack
                handleBackQuestion={handleBackQuestion}
                title='' />
            <Text style={styles.current_question}>{currentQuestion} of {data.length}</Text>
            <FlatList
                style={styles.list_item}
                data={data}
                horizontal={true}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                ref={refQuestions}
                scrollEnabled={false}
            />
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={handleChangeQuestion}
                    style={styles.bottom_btn}>
                    <Text style={styles.bottom_btn_txt}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect(null, { updateLesson })(TestQuestion)

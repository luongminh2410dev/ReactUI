import React, { useCallback, useEffect, useState, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, FlatList } from 'react-native'
import styles from './styles'
import HeaderBack from '../../components/header-back'
import { connect } from 'react-redux'
import { updateLesson } from '../../actions/lesson'
import { useNavigation } from '@react-navigation/core'
import Question from '../../components/question'
const keyExtractor = (item) => `question_${item.id}`;
const data = [
    { id: 1, question: '1.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, question: '2.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, question: '3.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 4, question: '4.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 5, question: '5.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
]
const TestQuestion = ({ route, updateLesson }) => {
    const navigation = useNavigation()
    const lesson = route.params.lesson
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const check = useRef(0)
    const arrAnswered = useRef([]);
    const refQuestions = useRef();
    // CHANGE QUESTION
    const handleChangeQuestion = () => {
        if (currentQuestion < data.length && check.current === 1) {
            check.current = 0
            refQuestions.current.scrollToIndex({ index: currentQuestion })
            setCurrentQuestion(currentQuestion + 1)
        }
        else if (currentQuestion < data.length && check.current === 0) {
            arrAnswered.current.push('')
            refQuestions.current.scrollToIndex({ index: currentQuestion })
            setCurrentQuestion(currentQuestion + 1)
        }
        // IF ANSWERED ALL QUESTION
        else if (currentQuestion == data.length) {
            // SHOW RESULT TESTS & UPDATE STORE
            handleFinishTest()
        }
    }
    //  FINISH ALL QUESTION
    const handleFinishTest = () => {
        let correct = 0
        for (var i in data) {
            if (data[i].correctAnswer == arrAnswered.current[i]) {
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
    const handleAnswer = (index, answer) => {
        arrAnswered.current.splice(index, 1, answer)
        check.current = 1
    }
    const handleBackQuestion = (cb) => {
        if (currentQuestion > 1) {
            refQuestions.current.scrollToIndex({ index: currentQuestion - 2 })
            setCurrentQuestion(currentQuestion - 1)
        }
        else {
            cb()
        }
    }
    const renderItem = useCallback(({ item, index }) => (
        <Question
            item={item}
            index={index}
            handleAnswer={handleAnswer} />
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

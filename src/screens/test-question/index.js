import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import HeaderBack from '../../components/header-back'
import { connect } from 'react-redux'
import { updateLesson } from '../../actions/lesson'
import { useNavigation } from '@react-navigation/core'
const data = [
    { id: 1, question: '1.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: '<h1>', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, question: '2.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: '<h1>', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, question: '3.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: '<h1>', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 4, question: '4.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: '<h1>', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 5, question: '5.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: '<h1>', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
]
const TestQuestion = ({ route, updateLesson }) => {
    const navigation = useNavigation()
    const lesson = route.params.lesson
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(-1)
    const [check, setCheck] = useState(0)
    const [correct, setCorrect] = useState(0)
    const { id, question, answerA, answerB, answerC, correctAnswer, img } = data[currentQuestion]
    // CHANGE QUESTION
    const handleChangeQuestion = () => {
        if (currentQuestion + 1 < data.length && check === 1) {
            setCurrentQuestion(currentQuestion + 1)
            setCheck(0)
        }
        // IF ANSWERED ALL QUESTION
        else if (currentQuestion + 1 == data.length) {
            // SHOW RESULT TESTS
            handleFinishTest(correct, data.length)
        }
        else { alert('Bạn chưa chọn đáp án') }
    }
    const handleFinishTest = (correct, total) => {
        const progress = correct / data.length
        const newLesson = { ...lesson, progress: progress }
        //  UPDATE THIS LESSON WITH NEW PROGRESS
        updateLesson(newLesson)
        Alert.alert(
            'Kết quả',
            `Đúng ${correct} / ${total}`,
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
    const handleAnswer = (answer) => {
        setCheck(1)
        // IF ANSWER IS CORRECT, INCREASE correct 
        if (answer === correctAnswer) {
            setCorrect(correct + 1)
        }
    }
    const handleAnswerA = () => {
        handleAnswer(answerA)
        setCurrentAnswer(0)
    }
    const handleAnswerB = () => {
        handleAnswer(answerB)
        setCurrentAnswer(1)
    }
    const handleAnswerC = () => {
        handleAnswer(answerC)
        setCurrentAnswer(2)
    }
    const setStylesBtn = {
        backgroundColor: '#FFF5EE', borderColor: '#F3705A'
    }
    return (
        <View style={styles.container}>
            <HeaderBack title='' />
            <Text style={styles.current_question}>{currentQuestion + 1} of {data.length}</Text>
            <Text style={styles.question}>{question}</Text>
            <View style={styles.img_view}>
                <Image
                    style={styles.img}
                    source={{ uri: img }}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity
                onPress={handleAnswerA}
                style={[styles.btn_answer, currentAnswer === 0 ? setStylesBtn : {}]}>
                <Text style={styles.btn_answer_txt}>A.{answerA}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleAnswerB}
                style={[styles.btn_answer, currentAnswer === 1 ? setStylesBtn : {}]}>
                <Text style={styles.btn_answer_txt}>B.{answerB}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleAnswerC}
                style={[styles.btn_answer, currentAnswer === 2 ? setStylesBtn : {}]}>
                <Text style={styles.btn_answer_txt}>C.{answerC}</Text>
            </TouchableOpacity>

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

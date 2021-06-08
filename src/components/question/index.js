import React, { useState, memo } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const Question = ({ item, handleAnswer, index }) => {
    const [currentAnswer, setCurrentAnswer] = useState(-1)
    const { id, question, answerA, answerB, answerC, correctAnswer, img } = item
    const handleAnswerA = () => {
        handleAnswer(index, 'A')
        setCurrentAnswer(0)
    }
    const handleAnswerB = () => {
        handleAnswer(index, 'B')
        setCurrentAnswer(1)
    }
    const handleAnswerC = () => {
        handleAnswer(index, 'C')
        setCurrentAnswer(2)
    }
    const setStylesBtn = {
        backgroundColor: '#FFF5EE', borderColor: '#F3705A'
    }
    return (
        <View style={styles.container}>
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

        </View>
    )
}

export default memo(Question)

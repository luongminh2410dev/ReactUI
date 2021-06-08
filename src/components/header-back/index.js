import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
const HeaderBack = ({ title, handleBackQuestion }) => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.goBack();
    }
    const handleBackClick = () => {
        if (handleBackQuestion) {
            handleBackQuestion(handleNavigate)
        }
        else {
            handleNavigate()
        }
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleBackClick}
                style={styles.header_btn_back}>
                <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
            </TouchableOpacity>
            <Text style={styles.header_title}>{title}</Text>
        </View>
    )
}

export default memo(HeaderBack);

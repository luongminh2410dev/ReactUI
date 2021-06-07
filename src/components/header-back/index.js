import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
const HeaderBack = ({ title }) => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleNavigate}
                style={styles.header_btn_back}>
                <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
            </TouchableOpacity>
            <Text style={styles.header_title}>{title}</Text>
        </View>
    )
}

export default memo(HeaderBack);

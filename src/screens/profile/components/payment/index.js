import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
const Payment = () => {
    return (
        <TouchableOpacity style={styles.main_btn}>
            <Text style={styles.main_btn_txt}>Payment</Text>
        </TouchableOpacity>
    )
}

export default Payment

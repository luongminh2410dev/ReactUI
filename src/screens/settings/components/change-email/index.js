import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const EmailChange = () => {
    return (
        <TouchableOpacity style={styles.main_btn}>
            <View style={styles.main_btn_1}>
                <View style={styles.main_btn_bell}>
                    <MaterialCommunityIcons name="email" size={12} color="#FFFFFF" />
                </View>
                <View style={styles.main_txt}>
                    <Text style={styles.main_btn_txt}>Email</Text>
                    <Text style={styles.main_btn_txt_2}>juanita123@gmail.com</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Ionicons name="chevron-forward-outline" size={24} color="#BEBAB3" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default EmailChange

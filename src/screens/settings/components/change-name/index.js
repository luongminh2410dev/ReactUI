import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const NameChange = () => {
    return (
        <TouchableOpacity style={styles.main_btn}>
            <View style={styles.main_btn_1}>
                <View style={styles.main_btn_bell}>
                    <FontAwesome style={styles.set_size_icon} name="user" size={12} color="#FFFFFF" />
                </View>
                <View style={styles.main_txt}>
                    <Text style={styles.main_btn_txt}>Name</Text>
                    <Text style={styles.main_btn_txt_2}>Juana Antonieta</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Ionicons name="chevron-forward-outline" size={24} color="#BEBAB3" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default NameChange

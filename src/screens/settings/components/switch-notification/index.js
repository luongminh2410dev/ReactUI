import React from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SwitchNotification = ({ toggleSwitch, isEnabled }) => {
    return (
        <TouchableOpacity style={[styles.main_btn, styles.main_btn_notifi]}>
            <View style={styles.main_btn_1}>
                <View style={styles.main_btn_bell}>
                    <FontAwesome5 name="bell" size={12} color="#FFFFFF" />
                </View>
                <Text style={styles.main_btn_txt}>Notifications</Text>
            </View>
            <Switch
                trackColor={{ false: "#767577", true: "#5BA092" }}
                value={isEnabled}
                onValueChange={toggleSwitch}
            />
        </TouchableOpacity>
    )
}

export default SwitchNotification

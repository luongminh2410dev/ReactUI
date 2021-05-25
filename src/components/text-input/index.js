import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
const InputText = ({ type, placeholder, setText, text }) => {
    const [hide, setHide] = useState(true);
    const handlePass = () => {
        setHide(!hide);
    }
    InputText.propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string,
        hide: PropTypes.bool,
        setText: PropTypes.func,
        text: PropTypes.string,
        handlePass: PropTypes.func
    }
    InputText.defaultProps = {
        type: '',
        placeholder: '',
        hide: true,
        text: ''
    }
    return (
        type != 'password' ?
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={'#78746D'}
                onChangeText={setText}
                value={text}
            />
            :
            <View style={styles.password}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#78746D'}
                    secureTextEntry={hide}
                    style={styles.password_text}
                    onChangeText={setText}
                    value={text}
                />
                <TouchableOpacity
                    onPress={handlePass}
                    style={styles.password_eye}
                >
                    <Feather name={hide ? 'eye' : 'eye-off'} size={20} color="#3C3A36" />
                </TouchableOpacity>
            </View>
    )
}

export default InputText

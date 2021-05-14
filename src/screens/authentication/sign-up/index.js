import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
const dismissKeyboard = () => Keyboard.dismiss();
const SignUp = ({ navigation }) => {
    const [hide, setHide] = useState(true);
    const handlePass = () => {
        setHide(!hide);
    };
    const handleNavigate = () => {
        navigation.navigate('Login')
    }
    return (
        <KeyboardAvoidingView
            style={styles.body}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={handleNavigate}
                        style={styles.header_btn_back}>
                        <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
                    </TouchableOpacity>
                    <Image
                        style={styles.header_image}
                        resizeMode={'contain'}
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/243b/c787/5a30273fd593d3bfac7f18f9337182f0?Expires=1621814400&Signature=KilSqAsPNRMuZRbqGL0QN4M2I3IDP2PNguoK3LJpNWHDqotfYCQLyQvgX22DZzYbkQJoBFVniZ7NIwkVIb-7oF44ucld4CnpCkTj8X6GbmWpC9spBEA7974-RtCooR3rk7CCxBPJS6ykuDpgDuMCR6lDp3nCa1QNHgDGlxVLPOiLiRfJ8ML-WTZqA~wEptbZC3ASAQ-CvXA0UUKKN-ZnypNNWUMUOX7mhLdkoAaDWr8DwC4A0Rf~asQCwl7D2xYjiMtTRwoJbhR7cAgNKB7A7ABnNgpsgCzLKrJg8LZcFPsf2V1L-VXNaytA93vnZPPXWvYEcRw8wLVZ9Lni9kQR1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    />
                    <Text style={styles.title_1}>Sign up</Text>
                    <Text style={styles.title_2}>Create your account</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Name'}
                        placeholderTextColor={'#78746D'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'#78746D'}
                    />
                    <View style={styles.password}>
                        <TextInput
                            placeholder={'Password'}
                            placeholderTextColor={'#78746D'}
                            secureTextEntry={hide}
                            style={styles.password_text}
                        />
                        <TouchableOpacity
                            onPress={handlePass}
                            style={styles.password_eye}
                        >
                            <Feather name={hide ? 'eye' : 'eye-off'} size={20} color="#3C3A36" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.btn_login}
                    >
                        <Text style={styles.txt_login}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleNavigate}
                        style={styles.btn_sign_up}
                    >
                        <Text style={styles.txt_sign_up}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export default SignUp

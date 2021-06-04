import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import InputText from '../../../components/text-input';
const dismissKeyboard = () => Keyboard.dismiss();
const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
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
                    <InputText
                        placeholder={'Name'}
                        setText={setName}
                        text={name}
                    />
                    <InputText
                        placeholder={'Email'}
                        setText={setEmail}
                        text={email}
                    />
                    <InputText
                        type={'password'}
                        placeholder={'Password'}
                        setText={setPass}
                        text={pass}
                    />
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

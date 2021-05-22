import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
const dismissKeyboard = () => Keyboard.dismiss();

const Login = ({ navigation }, props) => {
    const [hide, setHide] = useState(true);
    const handlePass = () => {
        setHide(!hide);
    };
    const signUp = () => {
        navigation.navigate('SignUp')
    };
    const signIn = () => {
        navigation.navigate('Home')
    };
    return (
        <KeyboardAvoidingView
            style={styles.body}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
                <View style={styles.container}>
                    <Image
                        style={styles.header_image}
                        resizeMode={'contain'}
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/410d/60fa/b606c8528c2f23f9ce6a44d4b6fa69cd?Expires=1621814400&Signature=cEQSr6K9TzJeqY8UtpKGZEpo4D-vjgs5regXco8BBBIdQ0S0LvY7oc-umYLJdjJeeWwxtDMXEYhk~48PusCt3fepGrluzgPUZWXxa2cv2dcYVP0jYdyNMsFMNsVBgFo579VG-hsf7oV-kVDzpl19lqs2PdwbM-Zems3EgLKRgNa01JKpx5TJkONLXF4ThHQtdC-hbumJGhNc4g5n6Zdi7bnyFAVoVfOsEoJV0V6D~DE7hZ4fblaTucJPxndqgUde8CInUjdBoUxQSaYEtsjRJB1-~ZwLYD038TWmbdszkb5n1T~5waYUcPFilElmnpaLZTcOfwbMS1T7pp1LD7AemA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    />
                    <Text style={styles.title_1}>Login</Text>
                    <Text style={styles.title_2}>Login with social networks</Text>
                    <View style={styles.other_login}>
                        <TouchableOpacity
                            style={styles.btn_other_login}
                        >
                            <AntDesign name="facebook-square" size={28} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn_other_login}
                        >
                            <AntDesign name="instagram" size={28} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn_other_login}
                        >
                            <AntDesign name="googleplus" size={28} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
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
                        style={styles.btn_forgot}
                    >
                        <Text style={styles.txt_forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={signIn}
                        style={styles.btn_login}
                    >
                        <Text style={styles.txt_login}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={signUp}
                        style={styles.btn_sign_up}
                    >
                        <Text style={styles.txt_sign_up}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export default Login

import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import screenDimension from '../../helper/screenDimension'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import TextBox from 'react-native-password-eye';
import { useNavigation } from '@react-navigation/core';
const SignUp = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                style={styles.header_image}
                resizeMode={'contain'}
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/243b/c787/5a30273fd593d3bfac7f18f9337182f0?Expires=1621814400&Signature=KilSqAsPNRMuZRbqGL0QN4M2I3IDP2PNguoK3LJpNWHDqotfYCQLyQvgX22DZzYbkQJoBFVniZ7NIwkVIb-7oF44ucld4CnpCkTj8X6GbmWpC9spBEA7974-RtCooR3rk7CCxBPJS6ykuDpgDuMCR6lDp3nCa1QNHgDGlxVLPOiLiRfJ8ML-WTZqA~wEptbZC3ASAQ-CvXA0UUKKN-ZnypNNWUMUOX7mhLdkoAaDWr8DwC4A0Rf~asQCwl7D2xYjiMtTRwoJbhR7cAgNKB7A7ABnNgpsgCzLKrJg8LZcFPsf2V1L-VXNaytA93vnZPPXWvYEcRw8wLVZ9Lni9kQR1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
            />
            <Text style={styles.title_1}>Sign up</Text>
            <Text style={styles.title_2}>Create your account</Text>
            {/* <View style={styles.other_login}>
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
            </View> */}
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
            <TextBox
                onChangeText={(text) => console.log(text)}
                // style={styles.input}
                containerStyles={[{
                    width: '100%',
                    height: 53,
                    marginTop: 16,
                    borderWidth: 1,
                    borderColor: '#BEBAB3',
                    borderRadius: 12,
                }]}
                inputStyle={[{ padding: 16 }]}
                placeholder={'Password'}
                placeholderTextColor={'#78746D'}
                secureTextEntry={true}
            />
            {/* <TouchableOpacity
                style={styles.btn_forgot}
            >
                <Text style={styles.txt_forgot}>Forgot Password?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={styles.btn_login}
            >
                <Text style={styles.txt_login}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.btn_sign_up}
            >
                <Text style={styles.txt_sign_up}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header_image: {
        marginTop: '5%',
        width: '100%',
        height: '31%',
    },
    title_1: {
        marginTop: 16,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title_2: {
        fontSize: 14,
        color: '#78746D',
        textAlign: 'center',
        marginTop: 8,
    },
    other_login: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_other_login: {
        height: 40,
        width: 40,
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#65AAEA',
        borderRadius: 8,
        marginTop: 8,
    },
    input: {
        width: '100%',
        height: 53,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        borderRadius: 12,
        padding: 16,
    },
    btn_forgot: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_forgot: {
        fontSize: 14,
        color: '#78746D',
        fontWeight: 'bold',
    },
    btn_login: {
        marginTop: 32,
        width: '100%',
        height: 'auto',
        backgroundColor: '#E3562A',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16
    },
    txt_login: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    btn_sign_up: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_sign_up: {
        textAlign: 'center',
        fontSize: 14,
        color: '#78746D',
        fontWeight: 'bold'
    }
})
export default SignUp

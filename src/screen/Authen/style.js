import { StyleSheet } from 'react-native'
import { Colors } from '../../ultilities'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AUTHEN_BACKGROUND,
    },
    header_btn_back: {
        height: 48,
        width: 48,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
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
        borderColor: Colors.BORDER,
        borderRadius: 12,
        padding: 16,
    },
    password: {
        width: '100%',
        height: 53,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 12,
    },
    password_text: {
        flex: 1,
        padding: 16,
        color: 'black'
    },
    password_eye: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
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
        backgroundColor: Colors.PRIMARY_COLOR,
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

export default styles

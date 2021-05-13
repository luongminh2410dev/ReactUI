import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../ultilities'
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
        height: Metrics.BTN_BACK_SIZE,
        width: Metrics.BTN_BACK_SIZE,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        borderRadius: Metrics.BTN_BACK_SIZE / 2,
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
        marginTop: Metrics.MARGIN_ITEM * 2,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title_2: {
        fontSize: 14,
        color: '#78746D',
        textAlign: 'center',
        marginTop: Metrics.MARGIN_ITEM,
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
        marginTop: Metrics.MARGIN_ITEM,
    },
    input: {
        width: '100%',
        height: Metrics.TEXT_INPUT_HEIGHT,
        marginTop: Metrics.MARGIN_ITEM * 2,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 12,
        padding: Metrics.MARGIN_ITEM * 2,
    },
    password: {
        width: '100%',
        height: Metrics.TEXT_INPUT_HEIGHT,
        marginTop: Metrics.MARGIN_ITEM * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 12,
    },
    password_text: {
        flex: 1,
        padding: Metrics.MARGIN_ITEM * 2,
        color: 'black'
    },
    password_eye: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Metrics.MARGIN_ITEM * 2,
    },
    btn_forgot: {
        marginTop: Metrics.MARGIN_ITEM * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_forgot: {
        fontSize: 14,
        color: '#78746D',
        fontWeight: 'bold',
    },
    btn_login: {
        marginTop: Metrics.MARGIN_ITEM * 2,
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.PRIMARY_COLOR,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
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
        marginTop: Metrics.MARGIN_ITEM * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_sign_up: {
        textAlign: 'center',
        fontSize: 14,
        color: '#78746D',
        fontWeight: 'bold'
    },
    // btn_bottom: {
    //     position: 'absolute',
    //     backgroundColor: '#78746D',
    //     width: '35%',
    //     height: 5,
    //     top: Metrics.DEVICE_HEIGHT - 43,
    // }
})

export default styles

import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingTop: Metrics.MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AUTHEN_BACKGROUND,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
    },
    header_btn_back: {
        height: Metrics.BTN_BACK_SIZE,
        width: Metrics.BTN_BACK_SIZE,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        borderRadius: Metrics.BTN_BACK_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        width: 140,
        fontSize: 24,
        color: Colors.TEXT_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginLeft: Metrics.DEVICE_WIDTH / 2 - 16 - Metrics.BTN_BACK_SIZE - 70
    },
    introduce: {
        flexDirection: 'column',
        marginTop: Metrics.MARGIN_ITEM * 2,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.BORDER,
        overflow: 'hidden'
    },
    intro_header: {
        height: Metrics.DEVICE_HEIGHT > 600 ? 334 : 278,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#FFF5EE',
    },
    intro_img: {
        flex: 1,
    },
    play_img: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 8,
    },
    intro_circle_1: {
        width: Metrics.MARGIN_ITEM * 6,
        height: Metrics.MARGIN_ITEM * 6,
        borderRadius: Metrics.MARGIN_ITEM * 3,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro_circle_2: {
        width: Metrics.MARGIN_ITEM * 5,
        height: Metrics.MARGIN_ITEM * 5,
        borderRadius: Metrics.MARGIN_ITEM * 2.5,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4
    },
    intro_info: {
        marginTop: Metrics.MARGIN_ITEM * 3,
        flexDirection: 'column',
        paddingHorizontal: Metrics.MARGIN_ITEM * 2
    },
    name_course: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    about_course: {
        marginTop: Metrics.MARGIN_ITEM,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#78746D',
        marginBottom: Metrics.MARGIN_ITEM * 2
    },
    list_course: {
        marginTop: Metrics.MARGIN_ITEM,
        width: '100%',
        height: '100%',
    },
})

export default styles

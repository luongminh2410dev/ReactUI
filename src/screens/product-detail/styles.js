import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    img: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT > 600 ? 257 : 168,
        marginTop: Metrics.MARGIN_ITEM * 2,
    },
    course_price: {
        alignSelf: 'flex-end',
        backgroundColor: '#65AAEA',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F2F2F2',
        borderRadius: 12,
        paddingHorizontal: Metrics.MARGIN_ITEM * 2,
        paddingVertical: 4,
        marginTop: Metrics.MARGIN_ITEM * 3
    },
    course_title_1: {
        width: '100%',
        fontSize: Metrics.FONT_SIZE * 6,
        marginTop: Metrics.MARGIN_ITEM * 3,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    course_about: {
        width: '100%',
        fontSize: 14,
        marginTop: 4,
        textAlign: 'left'
    },
    course_title_2: {
        fontSize: Metrics.FONT_SIZE * 5,
        width: '100%',
        textAlign: 'left',
        marginTop: Metrics.MARGIN_ITEM * 3,
        fontWeight: 'bold'
    },
    course_duration: {
        marginTop: 4,
        width: '100%',
        fontSize: 14,
        textAlign: 'left'
    },
    btn_area: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btn_add: {
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.PRIMARY_COLOR,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        paddingHorizontal: 32,
        borderRadius: 16,
    },
    txt_add: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})
export default styles

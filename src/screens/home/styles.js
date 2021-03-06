import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AUTHEN_BACKGROUND,
    },
    header: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_title: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    header_title_1: {
        fontSize: 16,
        color: Colors.TEXT_COLOR,
        textAlign: 'left',
    },
    header_title_2: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.TEXT_COLOR,
        textAlign: 'left',
    },
    header_notification: {
        width: Metrics.BTN_BACK_SIZE,
        height: Metrics.BTN_BACK_SIZE,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: Metrics.BTN_BACK_SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        width: '100%',
        flexDirection: 'row',
        marginTop: Metrics.HOME_MARGIN_ITEM,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category_title: {
        fontSize: 14,
        color: Colors.TEXT_COLOR,
        textAlign: 'center'
    },
    category_item: {
        height: 24,
        width: 54,
        backgroundColor: '#65AAEA',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    category_item_txt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F2F2F2',
        textAlign: 'center'
    },
    list_course: {
        marginTop: Metrics.MARGIN_ITEM,
        width: '100%',
        height: '100%'
    },
    label_style: {
        fontSize: 14,
        textAlign: 'center',
        paddingBottom: Platform.OS === 'ios' ? 0 : Metrics.MARGIN_ITEM * 2,
    },
    tab_bar: {
        width: '100%',
        height: Platform.OS === 'ios' ? 90 : 70,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    }
})

export default styles

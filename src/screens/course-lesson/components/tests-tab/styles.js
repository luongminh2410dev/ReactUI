import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../ultilities'
const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: Metrics.MARGIN_ITEM * 2
    },
    container: {
        width: '100%',
        flexDirection: 'column',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        marginTop: Metrics.MARGIN_ITEM * 2,
        paddingVertical: Metrics.MARGIN_ITEM * 3
    },
    img: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT > 600 ? 197 : 177,
    },
    quiz: {
        marginTop: Metrics.MARGIN_ITEM * 2,
        width: '100%',
        fontSize: 14,
        color: '#E3562A',
        textAlign: 'left',
        marginHorizontal: Metrics.HOME_MARGIN_ITEM * 2
    },
    lesson_name: {
        marginTop: 4,
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: Metrics.HOME_MARGIN_ITEM * 2
    },
    about: {
        marginTop: Metrics.MARGIN_ITEM,
        fontSize: 14,
        color: '#78746D',
        textAlign: 'left',
        marginHorizontal: Metrics.HOME_MARGIN_ITEM * 2
    },
    btn: {
        marginTop: Metrics.MARGIN_ITEM * 3,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        marginHorizontal: Metrics.HOME_MARGIN_ITEM * 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.PRIMARY_COLOR,
        borderRadius: 16,
        borderWidth: 2,
    },
    btn_txt: {
        fontSize: 14,
    }
})

export default styles

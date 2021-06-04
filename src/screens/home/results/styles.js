import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../ultilities'
const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        // paddingVertical: Metrics.MARGIN_ITEM * 2,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: Metrics.DEVICE_HEIGHT > 600 ? 56 : 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_btn_back: {
        height: Metrics.BTN_BACK_SIZE,
        width: Metrics.BTN_BACK_SIZE,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        borderRadius: Metrics.BTN_BACK_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 12,
    },
    search_input: {
        padding: Metrics.MARGIN_ITEM * 2,
        flex: 1,
    },
    search_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Metrics.MARGIN_ITEM * 2
    },
    total_results: {
        width: '100%',
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginTop: Metrics.HOME_MARGIN_ITEM,
        marginBottom: Metrics.MARGIN_ITEM * 3
    },
    course_results: {
        marginTop: Metrics.MARGIN_ITEM * 2,
        width: '100%',
        height: '100%',
    },
})
export default styles
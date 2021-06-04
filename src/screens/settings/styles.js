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
        alignItems: 'center'
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
        width: 100,
        fontSize: 24,
        color: Colors.TEXT_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginLeft: Metrics.DEVICE_WIDTH / 2 - 16 - Metrics.BTN_BACK_SIZE - 50
    },
    img: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT > 600 ? 190 : 160,
        resizeMode: 'contain',
        marginTop: Metrics.MARGIN_ITEM * 3,
        marginBottom: Metrics.MARGIN_ITEM,
    },
    main_title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginVertical: Metrics.MARGIN_ITEM
    }
})
export default styles

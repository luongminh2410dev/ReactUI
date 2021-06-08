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
    list_item: {
        width: '100%',
    },
    bottom: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottom_btn: {
        width: '100%',
        paddingHorizontal: Metrics.MARGIN_ITEM * 4,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 16,
    },
    bottom_btn_txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})
export default styles

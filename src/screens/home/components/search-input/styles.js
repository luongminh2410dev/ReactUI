import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../ultilities'
const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: Metrics.TEXT_INPUT_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Metrics.HOME_MARGIN_ITEM,
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
})
export default styles

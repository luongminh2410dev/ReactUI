import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
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
})
export default styles;
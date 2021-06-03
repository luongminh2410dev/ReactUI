import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../ultilities'
const styles = StyleSheet.create({
    main_btn: {
        marginVertical: Metrics.MARGIN_ITEM,
        width: '100%',
        paddingHorizontal: Metrics.MARGIN_ITEM * 2,
        paddingVertical: Metrics.MARGIN_ITEM * 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 16,
    },
    main_btn_txt: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
export default styles

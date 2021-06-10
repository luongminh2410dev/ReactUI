import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../ultilities'
const styles = StyleSheet.create({
    tab_bar: {
        width: '100%',
        height: 42,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 0,
    },
    label: {
        height: '100%',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'none'
    },
    line_bottomtab: {
        backgroundColor: 'transparent'
    },
    tab: {
        marginHorizontal: 2,
        backgroundColor: '#F8F2EE',
    }
})

export default styles

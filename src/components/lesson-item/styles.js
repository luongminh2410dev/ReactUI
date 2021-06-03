import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#CDCDCD',
        marginVertical: Metrics.MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 78,
        height: 72,
    },
    info: {
        flex: 1,
        paddingHorizontal: Metrics.MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    lesson_name: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#3C3A36',
    },
    lesson_progress: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        height: 11,
    },
    progress_bar: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        height: 11,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#FFF5EE'
    },
    progress: {
        height: '100%',
        backgroundColor: '#94C0E9',
    }
})

export default styles

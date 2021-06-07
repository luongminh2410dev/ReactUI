import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    scroll_styles: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingTop: Metrics.MARGIN_ITEM * 2,
        backgroundColor: Colors.AUTHEN_BACKGROUND,
    },
    lesson_name: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    current_lesson: {
        width: '100%',
        marginVertical: Metrics.MARGIN_ITEM,
        fontSize: 14,
        color: '#78746D',
        textAlign: 'center',
    },
})

export default styles

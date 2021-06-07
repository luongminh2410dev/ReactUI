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
    current_question: {
        width: '100%',
        fontSize: 16,
        marginTop: Metrics.MARGIN_ITEM * 2,
        textAlign: 'center',
        color: '#78746D',
    },
    question: {
        width: '80%',
        marginTop: Metrics.MARGIN_ITEM,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    img_view: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        paddingVertical: Metrics.MARGIN_ITEM,
        paddingHorizontal: Metrics.MARGIN_ITEM * 2,
        backgroundColor: '#F8F2EE',
        borderRadius: 8
    },
    img: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT > 600 ? 175 : 150,
    },
    btn_answer: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        paddingHorizontal: Metrics.HOME_MARGIN_ITEM * 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.BORDER,
        overflow: 'hidden'
    },
    btn_answer_txt: {
        width: '100%',
        textAlign: 'left',
        fontSize: 16,
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

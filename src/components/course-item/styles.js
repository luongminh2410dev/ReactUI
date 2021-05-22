import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: Metrics.HOME_MARGIN_ITEM / 2,
        // backgroundColor:  ? '#F8F2EE' || '#E6EDF4',
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 12,
        overflow: 'hidden'
    },
    header: {
        width: '100%',
        height: 194,
        flexDirection: 'column',
        paddingTop: Metrics.MARGIN_ITEM * 2,
        justifyContent: 'center'
    },
    course_img: {
        width: '100%',
        height: 138,
        resizeMode: 'center'
    },
    course_price: {
        alignSelf: 'flex-end',
        backgroundColor: '#65AAEA',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F2F2F2',
        borderRadius: 12,
        paddingHorizontal: Metrics.MARGIN_ITEM * 2,
        paddingVertical: 4,
        marginHorizontal: Metrics.MARGIN_ITEM * 2,
    },
    course_info: {
        width: '100%',
        // height: 140,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
    course_time: {
        marginTop: Metrics.HOME_MARGIN_ITEM,
        fontSize: 12,
        color: '#5BA092',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    course_name: {
        marginTop: Metrics.HOME_MARGIN_ITEM / 2,
        color: Colors.TEXT_COLOR,
        fontSize: 24,
        fontWeight: 'bold',
    },
    course_description: {
        fontSize: 14,
        color: Colors.TEXT_COLOR,
        marginBottom: Metrics.MARGIN_ITEM
    }
})

export default styles

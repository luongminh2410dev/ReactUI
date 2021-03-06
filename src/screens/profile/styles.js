import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../ultilities'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: Metrics.MARGIN_ITEM * 2,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header_img: {
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#65AAEA',
        borderRadius: 70,
        padding: 4,
        marginVertical: Metrics.MARGIN_ITEM * 3,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 70,
    },
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
    logout_btn: {
        marginTop: Metrics.MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logout_btn_txt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#78746D'
    }
})
export default styles

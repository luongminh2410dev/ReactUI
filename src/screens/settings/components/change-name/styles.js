import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../ultilities'
const styles = StyleSheet.create({
    main_btn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Metrics.MARGIN_ITEM * 2,
        paddingVertical: Metrics.MARGIN_ITEM * 3,
        marginVertical: Metrics.MARGIN_ITEM,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 16,
    },
    main_btn_1: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    main_btn_bell: {
        backgroundColor: '#65AAEA',
        paddingVertical: 7,
        paddingHorizontal: 8,
        borderRadius: 1000,
    },
    set_size_icon: {
        marginHorizontal: 1,
    },
    main_txt: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    main_btn_txt: {
        marginHorizontal: Metrics.HOME_MARGIN_ITEM,
        color: Colors.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 20,
    },
    main_btn_txt_2: {
        marginHorizontal: Metrics.HOME_MARGIN_ITEM,
        color: '#78746D',
        fontSize: 14,
    },
})
export default styles

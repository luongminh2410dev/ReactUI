import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../ultilities'
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: Metrics.MARGIN_ITEM * 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vid_intro: {
        backgroundColor: '#E6EDF4',
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden'
    },
    intro_img: {
        width: '100%',
        height: 138,
    },
    play_img: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 8,
    },
    intro_circle_1: {
        width: Metrics.MARGIN_ITEM * 6,
        height: Metrics.MARGIN_ITEM * 6,
        borderRadius: Metrics.MARGIN_ITEM * 3,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro_circle_2: {
        width: Metrics.MARGIN_ITEM * 5,
        height: Metrics.MARGIN_ITEM * 5,
        borderRadius: Metrics.MARGIN_ITEM * 2.5,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4
    },
    intro_title: {
        marginTop: Metrics.MARGIN_ITEM * 3,
        fontSize: 20,
        width: '100%',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    intro_about: {
        width: '100%',
        fontSize: 14,
        marginTop: 4,
        color: '#78746D',
        textAlign: 'left'
    }
})

export default styles

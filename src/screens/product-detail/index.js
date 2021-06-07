import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { addCourse } from '../../actions/cart';
import { connect } from 'react-redux';
import HeaderBack from '../../components/header-back';

const ProductDetail = ({ navigation, route, addCourse, cart }) => {
    const product = route.params.item
    const checkCart = () => {
        const index = cart.findIndex(item => item.id === product.id);
        return index !== -1;
    }
    const [check, setCheck] = useState(checkCart)
    const handleAddCourse = () => {
        addCourse(product)
        setCheck(true)
    }
    const handleStartCourse = () => {
        navigation.navigate('Choose Lesson', { product })
    }
    const handleBtnSelected = () => {
        !check ? handleAddCourse() : handleStartCourse()
    }
    return (
        <View style={styles.container}>
            <HeaderBack title={product.name} />
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/5313/7dbc/14866ed6bd2714d2138992d2cb67ae56?Expires=1623628800&Signature=W4jadS871z9iNUAU3BIPqOwAw~k8~TaOE4KlHIq0zi5hoyqP3O7abaT-fcExuIdazMbUm0Fo9DoFDGlr71e39xdIXcpGlVd9A9AvJthtaFlP7fbyMIKbcQwZ3Kq~b7hbQtAgw2TOj2ij1y5ykiTymVOGAPBm-SmEPkx4Ynb~dhtZ8mwXDcS4yQp-bnOAfJigUNiTAHZ52zc46gUv9si0g68l7LCWlWm7cUM0NHQprzr4G-eescYtVIxf-m1eAeQ-C8nBepoa8M71xRmkg3JkDLUV5Y6c6H0a8GTek0HpuNH567WCxajRmUomzo5r4zvOGqL--eg6P~ejz7J74caHgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                style={styles.img}
                resizeMode='contain'
            />
            <Text style={styles.course_price}>${product.price}</Text>
            <Text style={styles.course_title_1}>About the course</Text>
            <Text style={styles.course_about}>You can launch a new career in web develop-ment
            today by learning HTML & CSS. You don't need a computer science degree or expensive software.
            All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.
            </Text>
            <Text style={styles.course_title_2}>Duration</Text>
            <Text style={styles.course_duration}>{product.time}</Text>
            <View style={styles.btn_area}>
                <TouchableOpacity
                    onPress={handleBtnSelected}
                    style={styles.btn_add}
                >
                    <Text style={styles.txt_add}>{!check ? 'Add to cart' : 'Start'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    };
};
export default connect(mapStateToProps, { addCourse })(ProductDetail);

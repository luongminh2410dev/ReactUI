import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import HeaderBack from '../../components/header-back';
import Payment from './components/payment';
import SavedCourses from './components/saved-course';
import styles from './styles'
import YourCourses from './components/your-courses';
const Profile = ({ navigation }) => {
    const handleNavigateYourCourse = () => {
        navigation.navigate('Your Courses')
    }
    return (
        <View style={styles.container}>
            <HeaderBack title={'Profile'} />
            <View style={styles.header_img}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/34c8/8019/862a38dca31d58d82d0b0def4e0c67a7?Expires=1621814400&Signature=g0ry9iVUUczpYAd8TSW3kkyY6kKwARvqS3mSbG-7RvU3TgDBCMrvO4YukMVVg0fX9hKg4uKYx12s5~z~-iYrX19Kblsqb5a096GGVV9Zz42CZXHERPIjQA-p9HoMGX5m8F1EytMDRBHbNWqUpDv8K6VVAHrrJjIKoziHjL3ZT2un0XSJhCCkrBCZlpfJqTz8VKs5ZoNa1lPlI-HnmqOEsq48zZnqePlATBvkyq4NPDEO14CZ2jqwuZZuYhPQvz3~dJuF4Tqb4HBHOS2XNm3fkhtqVLAtBDhOgIDRoYw4-1LqwDiBErDNsD85~08fghJss8rxGxMjDPdrdiA1Z-HaIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                />
            </View>
            <YourCourses
                handleNavigateYourCourse={handleNavigateYourCourse} />
            <SavedCourses />
            <Payment />
            <TouchableOpacity style={styles.logout_btn}>
                <Text style={styles.logout_btn_txt}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import HeaderBack from '../../components/header-back';
import LessonItem from '../../components/lesson-item';
import styles from './styles'
const keyExtractor = (item) => `lesson_${item.id}`;
const ChooseLesson = ({ route, lessons, navigation }) => {
    const product = route.params.product
    const renderItem = useCallback(({ item }) => (
        <LessonItem
            item={item}
            course={product} />
    ), [lessons]);
    const handleNavigateIntro = () => {
        navigation.navigate('Course Lesson', { course: product, lessons: lessons })
    }
    const getHeader = () => {
        return (
            <View>
                <TouchableOpacity
                    onPress={handleNavigateIntro}
                    style={styles.introduce}>
                    <View style={styles.intro_header}>
                        <Image
                            source={{ uri: 'https://s3-alpha-sig.figma.com/img/7c62/82d9/1b9ddd3175fd3bbbb0984363ee0b6dac?Expires=1623628800&Signature=aah-YYRHKf7UoDXxv8glyv4S7RMiD1IULpGu7OUBq-4-d1LR9ljfbaRpm8zVNIDYoeq~g~kFaVF9XUdFkniyUUFEwLEw4x9BnoofyBdScdzZLaBRx03qh5KDMxdtvVHdVxI0q3SCwCRAlkaIkNMx5mkqK8pdWyaFrgwuxsBmsRekvFZcfuuorpka6tES~Myl4ZT1qKEOh8Or6psAn3ab1CJOJC1nH0I8vJ23y6Ixxw5icsXoFYvt4kv4fKHMomuK7e5d4omkeAn-MwXHyVQl3xZvkl3Rb-pCVtKPdP7lHAJO63hVCnlJzkVfxKNOSv86dQBgQhYF3CEXaehEs1qo1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                            style={styles.intro_img}
                            resizeMode='contain'
                        />
                        <View style={styles.play_img}>
                            <View style={styles.intro_circle_1}>
                                <View style={styles.intro_circle_2}>
                                    <FontAwesome name="play" size={20} color="#5ba092" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.intro_info}>
                        <Text style={styles.name_course}>{product.name}</Text>
                        <Text style={styles.about_course}>{product.description}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderBack title={product.name} />
            </View>
            <FlatList
                style={styles.list_course}
                data={lessons}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListHeaderComponent={getHeader}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        lessons: state.lesson.lessons
    };
};
export default connect(mapStateToProps)(ChooseLesson)

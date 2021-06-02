import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CourseItem from '../../components/course-item'
const data = [
    { id: 1, name: 'UI', description: 'Advanced mobile interface design', time: '3 h 30 min', price: 50, color: '#F8F2EE', img: 'https://s3-alpha-sig.figma.com/img/96d3/43c1/74e9a3f60627a26773650e46742a0c9c?Expires=1621814400&Signature=OX1PfMkqH-EJzHkS61x7kmBdfsjU~BuVOLq8JyXt1b8Yx2XEHLT3PhWG3sNJIm8oA6lGciFzfLxdwHQqsazNBHAZ2cW85QFB8c8zs8ab81IdYftMwFyyHswC00zI-EMEFQdjbCcdrKuAyCXaqbKXGcrIvKy9aE1ewB8Iy56103xWehDnCoV~hn30BwPS1zV2uHzd341wtDlHIab4qALMn12pHowuD0x7ij3b3PTu5klwrnO0MfdvIYIz75LHf30lljxpENayEu7qmb-FoGQTzTrAPwJ-ZgYWqwvsO21hhK97Tcc1fuqnUPqnF4G8sQLmeqVAlBJXjHv7qfUfQoCtIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, name: 'UI Advance', description: 'Advanced mobile interface design', time: '3 h 30 min', price: 50, color: '#E6EDF4', img: 'https://s3-alpha-sig.figma.com/img/6ca5/c6cc/c490ec15d029798d1a46f80c5e2dc3ff?Expires=1621814400&Signature=SOMqS-kgGOgLREAaZMTkonZIGM2oWevefuiY8kPFS3qK1z-SN9~o4Tpu0ZqCahzURfHiSKYK8tQfBmI7seOwhoDa3jmU4kzAhLojbA4I-YD7e5gIPwClxYd6JwJeGP0CGi7ECfQSCZfDhiLpwSAE5uyDGupk7hguBPe58DHqCrmksI8~nYvwCCHmlqoMwZ0Ntg86DSYNghURcVXedxLTs~EB4jAdZBy1C7cmssazyg83~meaZDpq3ng811Hgk2OgdnD15jwlGMAbVKNGTCS~~Rn0oWAxi27PVQnMLEfb4YOlFoem~cNPrQxXOnGv873Y05JAv5Pk6QaVWBj5vzqOYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, name: 'UI', description: 'Advanced web applications', time: '3 h 30 min', price: 50, color: '#F8F2EE', img: 'https://s3-alpha-sig.figma.com/img/eff6/5330/b8ae9d7c30db50948cbdaaae3bd86d08?Expires=1621814400&Signature=RBRCvuyJaFSXXzse5nXhmAGTCyYfXo7BtQ5lRV5HiOtm9MLNsamThrWRw2p8~~c~1J1HsJPBS6xC9uvdgm53~9XEBglr7nqczYqQ-nF1jPwAcc89jfXxILsbokwwjUaZZWzqhe8UFNL26QFQgEBJnUtEC~65oywgTzTNVn3LOmo2fXCXEWQBL~Ndd9vr50iAjgPVBjR2eoBqf1Fje4uf6YOCqSrt9iCTGLo-6KgLkFX7nbpVkBbiS3F3cqao2Jr00qui0SdX85Y81aY0tX6owLPkmqTTUuZ-9SjqGvIaMwNn7f90J6~Ucx1cNmbzu7mgDK5xpg3ee~fsQdcb3HJQtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
]
const dismissKeyboard = () => Keyboard.dismiss();

const Results = ({ navigation, route }) => {
    console.log('Render Result')
    const keyWord = route.params.text
    const [text, setText] = useState(keyWord)
    const handleNavigate = () => {
        navigation.goBack()
    }
    const renderItem = ({ item }) => (
        <CourseItem
            item={item}
        />
    )
    const getHeader = () => {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleNavigate}
                        style={styles.header_btn_back}>
                        <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <TextInput
                            blurOnSubmit={true}
                            style={styles.search_input}
                            placeholderTextColor={'#78746D'}
                            value={text}
                            onChangeText={setText}
                        />
                        <TouchableOpacity
                            style={styles.search_btn}>
                            <AntDesign name="search1" size={20} color="#200E32" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.total_results}>2 Results</Text>
            </View>
        )
    }
    return (
        <KeyboardAvoidingView
            style={styles.body}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback
                onPress={dismissKeyboard}
                accessible={false}

            >
                <View style={styles.container}>

                    <FlatList
                        style={styles.course_results}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        ListHeaderComponent={getHeader}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Results

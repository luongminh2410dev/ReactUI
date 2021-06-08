import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
const TestsTab = ({ route }) => {
    const lessons = route.params.lessons;
    const navigation = useNavigation();
    const handleStartTest0 = () => {
        navigation.navigate('Test Question', { lesson: lessons[0] })
    }
    const handleStartTest1 = () => {
        navigation.navigate('Test Question', { lesson: lessons[1] })
    }
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/2975/b660/297cc686694c6db7a175260bd68b25c2?Expires=1623628800&Signature=FMDOtHkD-0hi9rbm0P7xA-JbsWt9ySTRkQN7R3NthqOONT3nA~jfqitOgkdqomArMXXMvEzATpq6Ofdxkub3fcJtQSTLyO7sC0rTqaPgcQrF0Do6QYEEwXCTzCripCKdfvqVBI-W6u3Ihr-KScUm4EdKCrTDa6FuYU2Xpp7tDZwuHOcGoohsOokOjUMteLqZMMEeldOii7XcKJX8I0pCnPN8so2UwLKqHFgGLitheenvC9lGFOcSfb7pGUsBSwbFTlSOGauPfkomsQf3ikiaSZilB0X3dD4qRzkZN1qQEojBcMahdiDh4Evq32cR2OgRyyUfHLP8FeHhg-Ezi3P61Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    style={styles.img}
                    resizeMode='contain'
                />
                <Text style={styles.quiz}>Quiz 1</Text>
                <Text style={styles.lesson_name}>{lessons[0].name}</Text>
                <Text style={styles.about}>Let’s put your memory on this topic test.
                Solve tasks and check your knowledge.
            </Text>
                <TouchableOpacity
                    onPress={handleStartTest0}
                    style={styles.btn}>
                    <Text style={styles.btn_txt}>Begin</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/9e94/caab/0c90a09b643dc13f827ad85c69df1509?Expires=1623628800&Signature=CPDUUzOuFnecuEa8t~cFtQdGb9W28blgTgv6UjW1bcLb18DtMV-9qV3XcaJZ7JLosLMU5h~iwu-K-6GGWm5exSjCP3eunXn~-sr91ex4LhrII8rLvDd-DysMnm10FiiQbPXsOTKIzNur7c3m2M97bdMCHswLBylrTE9FTSOJqJT6cOEZzTlHQbG2sd4H53lryQapmTsxqx8MrGJocXwDIrszsgEx1R2Yyp3NSoGgR1nCIWeTPSjn9I~CiNm2AQJjUxsLmMzf4uqE3T7nxx7Th8luq8LONLwmGEorlB1~tshJG3fZyWYPOgt0m~DgxqYyVR5EJLEcxeHpIpfj3aGrLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    style={styles.img}
                    resizeMode='contain'
                />
                <Text style={styles.quiz}>Quiz 2</Text>
                <Text style={styles.lesson_name}>{lessons[1].name}</Text>
                <Text style={styles.about}>Let’s put your memory on this topic test.
                Solve tasks and check your knowledge.
            </Text>
                <TouchableOpacity
                    onPress={handleStartTest1}
                    style={styles.btn}>
                    <Text style={styles.btn_txt}>Begin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TestsTab

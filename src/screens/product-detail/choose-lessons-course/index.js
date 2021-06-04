import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderBack from '../../../components/header-back';
import LessonItem from '../../../components/lesson-item';
import styles from './styles'
const data = [
    { id: 1, name: 'Main Tags', progress: 1, img: 'https://s3-alpha-sig.figma.com/img/f355/4c30/96ed6b15518aaf196b6129650feecb57?Expires=1623628800&Signature=FbENy2Y6NHHaSkpUhr1oAIfoIm9YSAbzylStLbD99FvLw-u7Xw4gLcaXBhnpAL6I~1nAjG~UVEam6C9Fq5cVhv65f1ixCFY~gJWO8A784G-o2RatmS8Qc5dzowKx-QzGLmhVUITyTz40ULyLsuZM~8VqU87yyenN5Cr3xSm-q0Oz~OIZR3162t7YtLSpeZMFe--mxrVNeCDOfCMcxXyBqhVH3EDt05RdN8fIEir40YclKh0M0BdEiectc1fM795OFDsZ~t6ar03vhSFJYm8E2PS0-48IVMVYUEKpKey3KRESjTl8imE7AE4nRGoaQECFQITGai8i~bgZ8wCZcL26rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, name: 'Tags For Header', progress: 0.4, img: 'https://s3-alpha-sig.figma.com/img/a2b8/bd7f/e2cb33694f28d226d369d6c6e0fb7ad9?Expires=1623628800&Signature=VivP9F3XpsGbRWQThnVlIXhpdu9L3K6dnV~yQAh~6wG5eBXGPNh87UNs6uuiUWUCGRl6vYbrNnN1D~edmlDrnnirzg2fhDapW5OFNhxylpvoc8W71l7AJEraJJqhyE70-TXfXhZXzsvb7ES5zoSqLjqsVV0C4iVB1nga7yr4QYpSKWifKkVVQwW76umNRdWJUCZbvhdNnHg78TXoEK9FkFRPSSDAIt2nXSecHx5QG57ZDYdBqOKbsKtjqm3NLh7WKTXsHulTx-IRVQIextobsDHiaXQ5Q2KHxJ3xwPkv3REEKmXQJE7x~STdwl8SbCXHSIzBiqhMNHxjkXsc88aFkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, name: 'Style Tags', progress: 0, img: 'https://s3-alpha-sig.figma.com/img/e7dc/70fc/1c2aa2ab217c362da74ce7d1aac284c7?Expires=1623628800&Signature=V~oDFmYteNEHriDpt8d7EQw5EQxdzEPtRVND3i6AbsSsjtJ1-B6DR6bTP1jKcwW~ov1lnMDhjtSwmCPsIQ1EqMXnWFtCFfEtsBt68i6WMdwqS~tZU0~HibKWPvfEna~10Q4o5dVaYzOwSPF2yRqFm2kQf17kU8D9IG8-OClUSie5edoyZiE8yo5eu1v-DNHQI9bbteOYMfLaclPz19qiNzfu~cvX65gD~ZFQ~xLKziiyWAriNx3Rqrshe~oO0qblTthivHYB~px0uzQFbwMDerOAAA4SmUAzYd5XtlJEKhQIkQllF4VWYcqc8r1fjV0Eh1j~UZf0OsfF0N6yvCvJ8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
]
const keyExtractor = (item, index) => index.toString()

const ChooseLesson = ({ route }) => {
    const renderItem = useCallback(({ item }) => (
        <LessonItem item={item} />
    ), []);
    const product = route.params.product
    const getHeader = () => {
        return (
            <View>
                <HeaderBack title={product.name} />
                <TouchableOpacity style={styles.introduce}>
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
            <FlatList
                style={styles.list_course}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListHeaderComponent={getHeader}
            />
        </View>
    )
}

export default ChooseLesson

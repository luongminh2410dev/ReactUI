import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LessonsTab = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.vid_intro}>
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
            </TouchableOpacity>
            <Text style={styles.intro_title}>Introduction</Text>
            <Text style={styles.intro_about}>You can launch a new career in web develop-ment today by learning HTML & CSS.
            You don't need a computer science degree or expensive software. All you need is a computer, a bit of time,a lot of determination,
            and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form.
            And, since we covered validation in the previous article, we're ready to submit!
            This article looks at what happens when a user submits a form — where does the data go,
            and how do we handle it when it gets there? We also look at some of the security concerns.
            </Text>
        </View>
    )
}

export default LessonsTab

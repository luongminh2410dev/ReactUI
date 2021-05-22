import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'


const Settings = ({ navigation }) => {
    const [isEnabled, setEnabled] = useState(false);
    const toggleSwitch = () => {
        setEnabled(!isEnabled);
    };
    const handleNavigate = () => {
        navigation.goBack();
    }
    return (
        <ScrollView
            style={styles.body}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleNavigate}
                        style={styles.header_btn_back}>
                        <Ionicons name="chevron-back-outline" size={20} color="#3C3A36" />
                    </TouchableOpacity>
                    <Text style={styles.header_title}>Settings</Text>
                </View>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/d52b/6e58/1ad3aa92d23085929517fb2aeadf0062?Expires=1621814400&Signature=aByCdUfnSYITGRWmQciBwEwZPU2wx2ZG7o~y0AYJ5x6BMOABIc~9nRfmGi1ZHfHH4C2D~kVSCa4dRsqs3Vc-E8mHSt3vEpRnJAZHewfvNVbP3PmbqkxQWe1Di3QxQxsgxS4Agwlwk1o38qkNGwhsmxxraNXEiHrAHbvRHflCoQzjWTU42vLEfKtl~RU2hcWHs8uzaPkw4BfJ94FjdumskedvOOXKOsLZFCrsYKQcMpicsvXFOsAWuxpCL4otrnjRWeyOLzW3d2scMkd9orSJJNaFOe86bsS9IN8J8vPvE1h29YCU5H6Bu2-yKlYEctlQQfZpzmGU4Qvya2OB37rIgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                />
                <TouchableOpacity style={[styles.main_btn, styles.main_btn_notifi]}>
                    <View style={styles.main_btn_1}>
                        <View style={styles.main_btn_bell}>
                            <FontAwesome5 name="bell" size={12} color="#FFFFFF" />
                        </View>
                        <Text style={styles.main_btn_txt}>Notifications</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#5BA092" }}
                        value={isEnabled}
                        onValueChange={toggleSwitch}
                    />
                </TouchableOpacity>
                <Text style={styles.main_title}>Account information</Text>
                <TouchableOpacity style={styles.main_btn}>
                    <View style={styles.main_btn_1}>
                        <View style={styles.main_btn_bell}>
                            <FontAwesome name="user" size={12} color="#FFFFFF" />
                        </View>
                        <View style={styles.main_txt}>
                            <Text style={styles.main_btn_txt}>Name</Text>
                            <Text style={styles.main_btn_txt_2}>Juana Antonieta</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={24} color="#BEBAB3" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_btn}>
                    <View style={styles.main_btn_1}>
                        <View style={styles.main_btn_bell}>
                            <FontAwesome5 name="bell" size={12} color="#FFFFFF" />
                        </View>
                        <View style={styles.main_txt}>
                            <Text style={styles.main_btn_txt}>Email</Text>
                            <Text style={styles.main_btn_txt_2}>juanita123@gmail.com</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={24} color="#BEBAB3" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_btn}>
                    <View style={styles.main_btn_1}>
                        <View style={styles.main_btn_bell}>
                            <FontAwesome5 name="bell" size={12} color="#FFFFFF" />
                        </View>
                        <View style={styles.main_txt}>
                            <Text style={styles.main_btn_txt}>Password</Text>
                            <Text style={styles.main_btn_txt_2}>changed 2 weeks ago</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={24} color="#BEBAB3" />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Settings

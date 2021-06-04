import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import HeaderBack from '../../components/header-back';
import NameChange from './components/change-name';
import PasswordChange from './components/change-password';
import SwitchNotification from './components/switch-notification';
import EmailChange from './components/change-email';
const Settings = () => {
    const [isEnabled, setEnabled] = useState(false);
    const toggleSwitch = () => {
        setEnabled(!isEnabled);
    };
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.body}>
            <View style={styles.container}>
                <HeaderBack title='Settings' />
                <Image
                    style={styles.img}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/d52b/6e58/1ad3aa92d23085929517fb2aeadf0062?Expires=1621814400&Signature=aByCdUfnSYITGRWmQciBwEwZPU2wx2ZG7o~y0AYJ5x6BMOABIc~9nRfmGi1ZHfHH4C2D~kVSCa4dRsqs3Vc-E8mHSt3vEpRnJAZHewfvNVbP3PmbqkxQWe1Di3QxQxsgxS4Agwlwk1o38qkNGwhsmxxraNXEiHrAHbvRHflCoQzjWTU42vLEfKtl~RU2hcWHs8uzaPkw4BfJ94FjdumskedvOOXKOsLZFCrsYKQcMpicsvXFOsAWuxpCL4otrnjRWeyOLzW3d2scMkd9orSJJNaFOe86bsS9IN8J8vPvE1h29YCU5H6Bu2-yKlYEctlQQfZpzmGU4Qvya2OB37rIgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                />
                <SwitchNotification
                    isEnabled={isEnabled}
                    toggleSwitch={toggleSwitch} />
                <Text style={styles.main_title}>Account information</Text>
                <NameChange />
                <EmailChange />
                <PasswordChange />
            </View>
        </ScrollView>
    )
}

export default Settings

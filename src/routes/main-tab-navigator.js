import React from 'react'
import styles from '../screens/home/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: '#E3562A',
                labelStyle: styles.label_style,
                style: styles.tab_bar,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="book" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={20} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings-sharp" size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab

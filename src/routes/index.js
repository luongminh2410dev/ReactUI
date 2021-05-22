import React from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/authentication/login';
import SignUp from '../screens/authentication/sign-up';
import Home from '../screens/home'
import Profile from '../screens/profile'
import Settings from '../screens/settings'
import styles from '../screens/home/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const HomeTab = () => {
    return (
        <Tab.Navigator
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
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="book" size={20} color={focused ? '#E3562A' : "#BEBAB3"} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user" size={20} color={focused ? '#E3562A' : "#BEBAB3"} />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="settings-sharp" size={20} color={focused ? '#E3562A' : "#BEBAB3"} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Home' component={HomeTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;